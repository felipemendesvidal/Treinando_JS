//declarações e array
let frutas = ['Atemoia','Fruta_do_conde','uva','manga']
let btnCadastrar = document.querySelector('#btnCadastrar');
let btnRemover = document.querySelector('#btnRemover');

//array de objetos
//let objetos[ {id : 1, nome : 'felipe' },{id : 1, nome : 'felipe' }]

//eventos
btnCadastrar.addEventListener('click', cadastrar_frutas);
btnRemover.addEventListener('click', deletar);




//metodo listar
function listar(){
    //criando objeto da tabela para inserir os dados dinamicamente
    let tabelacorpo = document.querySelector('#tabelacorpo');

    //criando dinamicamente, apagando conteudo
    tabelacorpo.innerHTML = "";
    //criando linha
    let linha, colunaNome;
    //criando laço
        // item vai varrer todos os dados do array
    frutas.forEach(item => {
        //criando elemento html
        linha = document.createElement('tr');
        colunaNome = document.createElement('td');
        //colocando o dado
        colunaNome.innerHTML=item;

        //criando e chamando um novo 'filho da linha'
        linha.appendChild(colunaNome);
        tabelacorpo.appendChild(linha);
    });
}//end listar

//metodo cadastrar
function cadastrar_frutas(event){
    event.preventDefault();
    //pegando elemento que fornecera a informação para cadastrar no array
    let fruta = document.querySelector('#fruta');
    //o push é a mesma coisa do add
    frutas.push(fruta.value);
    //mostrando o que foi cadastrado
    listar();
    // depois que mostrar, vai limpar o campo
    fruta.value = "";
    alert('Fruta cadastrada!');

}//fim cadastrar futras


//delete
function deletar(event){
    event.preventDefault();

    let fruta = document.querySelector("#fruta");

    //vai retornar o valor do item
    let index = frutas.indexOf(fruta.value);//index nada mais é que a posição do array

    //removendo
    if(index > -1){
        //metodo removar apartir de um index(posição de array) e a quantidade que vai remover
        frutas.splice(index, 1); 
        alert("fruta removida com sucesso");
        listar();
        fruta.innerHTML = "";
    }else{
        alert("fruta não encontrada");

    }

    //indicado para array de objetos
    //verificando se a fruta existe no array percorrendo cada item, esse metodo é meio lento
    // frutas.forEach( item =>{
    //     if(item === fruta.value){
    //         //remover


    //     }//fim if
    // });//fim foreach e lambida
}//fim deletar