//declarações
let cadastrar = document.querySelector('#cadastrar');


//evento
cadastrar.addEventListener('click', Cadastrar);

//faz os cadastros dos dados digitados nos inputs
function Cadastrar(event){
    event.preventDefault();


    //pegando valores input
    let email2 = document.querySelector('#email2');
    let nome2 = document.querySelector('#nome2');
    let telefone2 = document.querySelector("#telefone2");

    //criando objeto
    let dadosPessoais = {
        nome2: nome2.value, email2: email2.value,telefone2: telefone2.value
    }

    console.log(dadosPessoais);
    //convertendo objeto em jason
    console.log(JSON.stringify(dadosPessoais));
}//end cadastrar