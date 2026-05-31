const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
  USUÁRIOS INTERNOS
*/

const usuarios = [
   {
    usuario: "admin",
    senha: "admin"
  },
  {
    usuario: "henrique.shiratori",
    senha: "henrique"
  },
  {
    usuario: "renato.barros",
    senha: "renato"
  },
  {
    usuario: "marcelo.ferraz",
    senha: "marcelo"
  },
  {
    usuario: "rafael.valente",
    senha: "rafael"
  },
];

/*
  ROTA LOGIN
*/

app.post("/login", (req, res) => {

    const { usuario, senha } = req.body;

    const usuarioEncontrado = usuarios.find(user =>
        user.usuario === usuario &&
        user.senha === senha
    );

    if(usuarioEncontrado){

        return res.json({
            sucesso: true
        });

    }else{

        return res.status(401).json({
            sucesso: false,
            mensagem: "Usuário ou senha inválidos"
        });

    }

});

/*
  TESTE SERVIDOR
*/

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});