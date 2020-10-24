//api mockApi simulador de api
let link_api = 'https://5f8c9f01c7aadb001605e4d7.mockapi.io/categorias';

let categoria_filme = document.querySelector('#categoria_filme');

//pesquisar mais xmlhttpRequest
function listar_filmes(){
    // comunicação com api
        //cria uma instancia do objeto xmlhttprequest para fazer as transferencia dos dados do cliente para o servidor 
        let xhrGet = new XMLHttpRequest();
        //define a função de sucesso caso ocorra sucesso na conexão
        xhrGet.onload = listarSucesso;
        //da a tratativa do erro caso haja erro na conexão
        xhrGet.onerror = kistarError;
        //abre a conexão com a api passando o metodo de comunicação e  url/endponit
        xhrGet.open('GET',link_api);
        //envia para api
        xhrGet.send();
        //50:00 4 - Trabalhando com requisições na Api - XmlHttpRequest
    //end comunicação

}//fim do processo de abertura de conexões

//funcção auxiliar da listar fiilmes
function listarSucesso(){
    console.log('sucesso');
    //pega o retorno do this, que é o pai do objeto que faz a transferencia dos dados com a api
    const data = this.responseText;
    //pegar lista reservada, o this nada mais é que o objeto que esta sendo chamado
    //converte para json array
    console.log(JSON.parse(data));
    console.log(categoria_filme);
}//fim listar sucesso

//função auxiliar de erro do listar filmes, caso ocorra um erro na chamada para a api
function kistarError(err){
    console.error(err);

}//fim da função

//cadastrar filmes
    //declaração
    let cadastrar_filmes_objeto = document.querySelector('#btnCadastrarFilmes');

    //evento do cadastrar esta direto no html
    cadastrar_filmes_objeto.addEventListener('click', cadastrar_filmes);

    //pegando os valores do input
    let nome_filme = document.querySelector('#nome_filme');
     let categoria_filmes =document.querySelector('#categoria_filme');
     let ano_filme = document.querySelector('#ano_filme');

    //objeto com dados do formulario cadastrar
    // let objeto_filmes_cadastrar = {
    //     nome_filme_objeto: nome_filme.value,
    //     categoria_filme_objeto: categoria_filme.value, 
    //     ano_filme_objeto: ano_filme.value 
    // }//fim do objeto

    // btn cadastrar filmer
    function cadastrar_filmes(event){
       event.preventDefault();

        //comunicação com a api
       let xhrPost = new XMLHttpRequest();
        xhrPost.onload = cadastro_filme_sucesso;
        xhrPost.onerror = cadastro_filme_error;

        //envia os dados para a api usando o metodo post
        xhrPost.open('POST', link_api);

        //define o conteudo do header
        xhrPost.setRequestHeader('content-type', 'application/json');

        //cria o objeto com o nome da categoria
        let parametros_envio = {
            name: categoria_filme.value
        }

        // enviar no post eu converto em json o objeto
        xhrPost.send(JSON.stringify(parametros_envio))

        

    }//fim da função cadastrar
    function cadastro_filme_sucesso (){
        alert('Cadastro de filmes com sucesso');
        console.log("filme cadastrado com sucesso");
        console.log(this.status);
        console.log(this.responseText);
        listar_filmes();
    }// fim cadastro sucesso

    function cadastro_filme_error ( err) {
        alert(" erro ao cadastrar");
        console.log("erro ao cadastrar");
        console.log(err);
    }// fim cadastro error
//fim cadastrar filmes

//remover
    function remover_filme (){
        let xhrRemove = new XMLHttpRequest();
        xhrRemove.onload = remover_filme_sucesso;
        xhrRemove.onerror = remover_filme_error;
        xhrRemove.open('DELETE', link_api + '/' + categoria_filme.value);
        xhrRemove.send();


    }//fim da função principal
    function remover_filme_sucesso (){
        alert('Cadastro de filmes deletado com sucesso');
        console.log("filme deletado com sucesso");
        console.log(this.status);
        console.log(this.responseText);
        listar_filmes();

    }//fim remover sucesso
    function remover_filme_error(err){
        alert(" erro ao deletar");
        console.log("erro ao deletar");
        console.log(err);

    }//fim remover sucesso

//end remover