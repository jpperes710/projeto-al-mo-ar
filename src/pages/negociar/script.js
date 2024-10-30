import { times } from "../../data/data.js";

const parametros = new URLSearchParams(window.location.search);
const nome = parametros.get('nome');

const divJogador = document.getElementById('div-jogador');

// INICIANDO o código para criar a lista de todos os jogadores
const jogadores = []; // <- TODOS OS JOGADORES ESTÃO DENTRO DESSA VARIAVEL(LISTA)

for (const time of times) {
    for (const jogador of time.jogadores) {
        jogadores.push(jogador)
    }
};
// ENCERRANDO o código que cria a lista de todos os jogadores

const findJogador = jogadores.find(e => e.nome === nome)

divJogador.innerHTML += `
    <h2>${findJogador.nome}</h2>
`

console.log(findJogador);