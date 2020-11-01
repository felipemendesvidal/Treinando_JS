//api mockApi simulador de api
let link_api_filmes= 'https://5f8c9f01c7aadb001605e4d7.mockapi.io/api/filmes';



//listar filmes dois
    //pure function
    const listar_filmes2 = () =>{
        //fetch serve para a mesma coisa que o xmlhttprequest, usado para comunicação http com o servidor, porem funciona de formas diferentes
        //fez a chamada para api e retona uma promessa caso sejá feito a comunicação com sucesso
        fetch(link_api_filmes, { method: 'GET'})
            //onload
            .then(response => response.json()) // se ocorrer ele pegará o response convertido em json
            .then(dados => {
                PreencherTabelaFilmes(dados);
        })//pega as informaçãoes do retorno
        .catch(err => console.error(err));
        // 54:29 

    }//fim da pure function

    // const filmes = {
    //     nomeFilme : document.querySelector('#nome_filme2').value,
    //     categoriaFilme : document.querySelector('#categoria_filme2').value,
    //     anoLancamento : document.querySelector('#ano_filme2').value
    // }
    //evento
    


    const PreencherTabelaFilmes = (dados) => {
        
    let tabelafilmescorpo = document.querySelector('#tabela-filmes-corpo');
    //criando dinamicamente, apagando conteudo
    tabelafilmescorpo.innerHTML = "";

    //criando linha
    let linha_filme, colunaId_filme, colunaNome_filme, colunaCategoria_filme, colunaAnoLancamento_filme, colunaAcao_filme;

    dados.forEach(item_lambida =>{
        linha_filme = document.createElement('tr');

        colunaId_filme = document.createElement('td');
        colunaId_filme.innerText = item_lambida.id;

        colunaNome_filme = document.createElement("td");
        colunaNome_filme.innerText = item_lambida.nome;

        colunaCategoria_filme = document.createElement("td");
        colunaCategoria_filme.innerText = item_lambida.categoria;

        colunaAnoLancamento_filme = document.createElement("td");
        colunaAnoLancamento_filme.innerText = item_lambida.anoÇancamento;

        colunaAcao_filme = document.createElement("td");

        let btnRemoverFilmes = document.createElement("input");
        btnRemoverFilmes.type = " button";
        btnRemoverFilmes.value = "Remover"
        btnRemoverFilmes.className = "btn btn-outline-danger";
        btnRemoverFilmes.setAttribute("onclick","remover(" + item_lambida.id +")");

        let btnEditar = document.createElement("input");
        btnEditar.type = "button";
        btnEditar.value = "Editar";
        btnEditar.className = "btn btn-outline-success"
        btnEditar.style.marginLeft = '20px';
        btnEditar.setAttribute("onclick", "editar("+ item_lambida.id +")");

        colunaAcao_filme.appendChild(btnRemoverFilmes);
        colunaAcao_filme.appendChild(btnEditar);

        linha_filme.appendChild(colunaId_filme);
        linha_filme.appendChild(colunaNome_filme);
        linha_filme.appendChild(colunaCategoria_filme);
        linha_filme.appendChild(colunaAnoLancamento_filme);
        linha_filme.appendChild(colunaAnoLancamento_filme);
        linha_filme.appendChild(colunaAcao_filme);

        tabelafilmescorpo.appendChild(linha_filme)

    });//fim da lambida

    }//fim da const

//fim do listar filme dois

//remover
const remover_filme2 = (id) => {
            
    fetch(link_api_filmes + '/' + id,{
        method : 'DELETE'
    })
    .then(response => response.json())
    .then(dados => {
        alert('Filme removido');

        listar_filmes2();
    })

}
//remover
//editar
const editar = (id) => {
    fetch(link_api_filmes+ '/' + id, {
        method : 'GET'
    })
    .then(response => response.json())
    .then(dado => {
        document.querySelector('#filmeId').value = dado.id;
        document.querySelector('#nome_filme2').value = dado.nome;
        document.querySelector('#categoria_filme2').value = dado.categoria;
        document.querySelector('#ano_filme2').value = dado.anoLancamento;
    })
}
//fim editar

//novo filme
const novoFilme = () => {
    document.querySelector('#formFilme').reset();
    document.querySelector('#filmeId').value = "";
    document.querySelector('#nome_filme2').focus();
}

//salvr
const salvar = () => {
    event.preventDefault();

    const filme = {
        nome : document.querySelector('#nome_filme2').value,
        categoria : document.querySelector('#categoria_filme2').value,
        anoLancamento : document.querySelector('#ano_filme2').value,
    }
}

 