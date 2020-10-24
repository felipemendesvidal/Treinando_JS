// 1. Lista somente os times cujas vitórias seja maior ou igual que 20
// 2. Traga somente os nomes dos times;
// 3. Adicione mais um time chamado Wolves, vitorias 12, empates 8, derrotas 10, gols proprios 38, golscontras 36;
// 4. Mostre o nome e a quantidade de jogos(vitorias, empates e derrotas), quantidade de vitorias, empates e derrotas de um time
// 5. Informe a quantidade de jogos do campeonato; x


//declarações e array


//array de objetos
let times = [
{nome: "Liverpool",vitorias: 23,empates: 7,derrotas:1,golsproprio:70,golscontra:5}, 
{nome: "City",vitorias: 24,empates: 2,derrotas:4,golsproprio:79,golscontra:21}, 
{nome: "Tottenhan",vitorias: 20,empates: 1,derrotas:9,golsproprio:57,golscontra:3}, 
{nome: "Arsenal",vitorias: 18,empates: 6,derrotas:6,golsproprio:63,golscontra:39}, 
{nome: "Manchester United",vitorias: 17,empates: 7,derrotas:6,golsproprio:58,golscontra:40}, 
{nome: "Chelsea",vitorias: 17,empates: 6,derrotas:7,golsproprio:50,golscontra:33}

];

//filtrando array de objetos
    console.log('Resultado do exercicio 1');
    let filtro_time_vitorias_20 = times.filter(objeto_array => {
        return objeto_array.vitorias >= 20;
    });//fim filter lambida
    console.log(filtro_time_vitorias_20);

    //outra forma
    // function buscarTime (){
    //     let times_bucar [];
    //     times.forEach(item_array => {
    //         if(item_array.vitorias >= 20){
    //             times_bucar.push(item_array);
    //         }
    //     });
    //     return buscarTime;
    // }
//fim exemplo e filtor 1

//map
    let dados_Times = times.map (time_array => {
        return {
            nome : time_array.nome,
            quantidadeJogos : time_array.vitorias + time_array.derrotas + time_array.empates,
            vitorias : time_array.vitorias,
            empates : time_array.empates,
            derrotas : time_array.derrotas,
            golscontra : time_array.golscontra,
            golsproprio : time_array.golsproprio,
            saldogols : (time_array.golsproprio - time_array.golscontra)
        }
    })
    console.log(dados_Times);
//map end

//reduce esta atrelado a soma de valores, a totalidade
    let quantidade_de_jogos_do_campeonato = times.reduce((q_jogos, q_time_lista) => {
        return q_jogos + (parseInt(q_time_lista.vitorias) + parseInt(q_time_lista.derrotas) + parseInt(q_time_lista.empates));

    }, 0);
    console.log(quantidade_de_jogos_do_campeonato)
//rduce end

// adicionando
let novoTime = {nome : 'Wolves',vitorias : 12,empates:8,derrotas : 10,golsproprio : 38,golscontra : 36}
times.push(novoTime);