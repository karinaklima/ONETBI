const form = document.getElementById("loginForm");

form.addEventListener("submit", async function(event){

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    try{

        const resposta = await fetch("https://onetbi.onrender.com/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                usuario,
                senha
            })

        });

        const dados = await resposta.json();

        if(dados.sucesso){
            sessionStorage.setItem("logado", "true");
            
            window.location.href = "dash.html";

        }else{

            alert(dados.mensagem);

        }

    }catch(error){

        alert("Erro ao conectar com servidor");

        console.log(error);

    }

});