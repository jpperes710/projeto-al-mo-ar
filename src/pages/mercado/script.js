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
                <p>${jogador.nome}</p>
            `
        }
    }
})