import { times } from "../../data/data.js";

const inputPesquisa = document.getElementById('input-pesquisa');
const divResultadoPesquisa = document.getElementById('resultado-pesquisa');

// INICIANDO o código para criar a lista de todos os jogadores
const jogadores = []; // <- TODOS OS JOGADORES ESTÃO DENTRO DESSA VARIAVEL(LISTA)

for (const time of times) {
    for (const jogador of time.jogadores) {
        jogadores.push(jogador)
    }
};
// ENCERRANDO o código que cria a lista de todos os jogadores

inputPesquisa.addEventListener('input', function (event) {
    divResultadoPesquisa.innerHTML = "";

    for (const jogador of jogadores) {
        if (jogador.nome.includes(event.target.value)) {
            divResultadoPesquisa.innerHTML += `
            <tr>
                <td>${jogador.nome} </td>
                <td class= "text-center">${jogador.nivel}</td>
                <td class= "text-center">${jogador.idade}</td>
                <td>${jogador.preco}</td>
                <td><a href="../negociar/negociar.html?nome=${jogador.nome}">Negociar</a></td>
            </tr>
            `
        }
    }
})