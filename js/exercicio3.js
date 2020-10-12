//pegando valores, declarações e array
let contatos_arrayObjeto = [{nome_contato:'felipe',email_contato:'felipe@felipe.com',telefone_contato:'123456789'}]
let btnCadastrar2 = document.querySelector('#btnCadastrar2');
let btnRemover2 = document.querySelector('#btnRemover2');
let nome_contato = document.querySelector('#nome_contato');
let email_contato = document.querySelector('#email_contato');
let telefone_contato = document.querySelector('#telefone_contato');

//eventos
btnCadastrar2.addEventListener('click', cadastrar_contato);
btnRemover2.addEventListener('click', deletar_contato);




  //limpar campos
  function limparCamposContatos(){
    nome_contato.value = "";
    email_contato.value = "";
    telefone_contato.value = "";
}//end limpa campos

//metodo listar
function listar_contato(){
    //criando objeto da tabela para inserir os dados dinamicamente
    let tabelaCorpo2 = document.querySelector('#tabelaCorpo2');

    //criando dinamicamente, apagando conteudo
    tabelaCorpo2.innerHTML = "";
    //criando linha
    let linha, colunaNome, colunaEmail, colunaTelefone;
    //criando laço
        // item vai varrer todos os dados do array
    contatos_arrayObjeto.forEach(item => {
        //criando elemento html
        linha = document.createElement('tr');
        colunaNome = document.createElement('td');

        //colocando os dados nas coluna
        colunaNome.innerHTML=item.nome_contato;

        //criando e chamando um novo 'filho da linha'
        linha.appendChild(colunaNome);


        //Email
        colunaEmail = document.createElement('td');
        colunaEmail.innerHTML = item.email_contato;
        linha.appendChild(colunaEmail);


        //Telefone
        colunaTelefone = document.createElement('td');
        colunaTelefone.innerHTML = item.telefone_contato;
        linha.appendChild(colunaTelefone);

        tabelaCorpo2.appendChild(linha);

    });
    //metod de li,par campos
    limparCamposContatos();
}//end listar

//metodo cadastrar
function cadastrar_contato(event){
    event.preventDefault();
    //crio um objeto com os dados do formulário
    let contato = {
        nome_contato : nome_contato.value,
        email_contato : email_contato.value,
        telefone_contato : telefone_contato.value
    }

    //o push é a mesma coisa do add
    contatos_arrayObjeto.push(contato);
    
    //mostrando o que foi cadastrado
    listar_contato();
    // depois que mostrar, vai limpar o campo
    contato.value = "";
    alert('contato cadastrada!');

}//fim cadastrar futras


//delete
function deletar_contato(event){
    event.preventDefault();


    //vai retornar o valor do item buscar por email
    let index = contatos_arrayObjeto.findIndex(item => item.email_contato === email_contato.value); //arrow functions

    //removendo
    if(index > -1){
        //metodo removar apartir de um index(posição de array) e a quantidade que vai remover
        contatos_arrayObjeto.splice(index, 1); 
        alert("fruta removida com sucesso");
        listar_contato();
        limparCamposContatos();
    }else{
        alert("fruta não encontrada");

    }

    // //buscar por email
    // function bucarEmail(item_contato){
    //     contatos_arrayObjeto.forEach((item_contato, index) => {
    //         if(item_contato.email_contato === email_contato){
    //             return index;
    //         }//fim else
    //     });
    // }//end bucar

  

    //indicado para array de objetos
    //verificando se a fruta existe no array percorrendo cada item, esse metodo é meio lento
    // frutas.forEach( item =>{
    //     if(item === fruta.value){
    //         //remover


    //     }//fim if
    // });//fim foreach e lambida
}//fim deletar