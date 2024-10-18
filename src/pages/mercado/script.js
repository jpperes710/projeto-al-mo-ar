import { times } from "../../data/data.js";

const inputPesquisa = document.getElementById('input-pesquisa');
const divResultadoPesquisa = document.getElementById('resultado-pesquisa');

const jogadores = []; // <- TODOS OS JOGADORES ESTÃO DENTRO DESSA VARIAVEL

for (const time of times) {
    for (const jogador of time.jogadores) {
        jogadores.push(jogador)
    }
};


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
                <td><button class= "btn btn-success">Negociar</button></td>
                 
            </tr>
            `
        }
    }
})