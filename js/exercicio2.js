//exercicio 2
let email = document.querySelector('#newsInputEmail');
let btn_enviar =document.querySelector('#btn_enviar');

// evento
btn_enviar.addEventListener('click', verificar_enviar);

//verifica se tem @ para enviar
function verificar_enviar(event)
{
    event.preventDefault();
    if(email.value.includes('@')=== true){
        alert("e-mail enviado")

    }else{
        alert("e-mail invalido")
    }//end else

}//end verificar_enviar
//exercicios 2 end