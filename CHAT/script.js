function logar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "https://console.dialogflow.com/api-client/demo/embedded/5688513d-8e88-481f-97c6-3820925996dc";
    }else{
        alert('Usuário ou senha incorretos');
    }
}