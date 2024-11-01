import { times, jogadores } from "../../data/newData.js";

const tbodyJogadores = document.getElementById('tbody-jogadores');
const inputPesquisar = document.getElementById('input-pesquisar');
const btnPesquisar = document.getElementById('btn-pesquisar');

// Abaixo lista de jogadores do time Almoçar, filtado pelo ID
const alMocarJogadores = jogadores.filter((e, i) => e.id_time === 1);


for (const jogador of alMocarJogadores) {
    tbodyJogadores.innerHTML += `
        <tr>
            <td>${jogador.posicao}</td>
            <td>${jogador.nome}</td>
            <td>${jogador.idade}</td>
            <td>${jogador.nivel}</td>
            <td>${jogador.preco}</td>
            
        </tr> `
};


btnPesquisar.addEventListener('click', () => {
    tbodyJogadores.innerHTML = "";

    for (const jogador of alMocarJogadores) {
        if (jogador.nome === inputPesquisar.value) {
            tbodyJogadores.innerHTML += `
            <tr>
                <td>${jogador.posicao}</td>
                <td>${jogador.nome}</td>
                <td>${jogador.idade}</td>
                <td>${jogador.nivel}</td>
                <td>${jogador.preco}</td>

            </tr> `
        }

        if (jogador.idade == inputPesquisar.value) {
            tbodyJogadores.innerHTML += `
            <tr>
                <td>${jogador.posicao}</td>
                <td>${jogador.nome}</td>
                <td>${jogador.idade}</td>
                <td>${jogador.nivel}</td>
                <td>${jogador.preco}</td>
                
            </tr> `
        }

        if (jogador.nivel == inputPesquisar.value) {
            tbodyJogadores.innerHTML += `
            <tr>
                <td>${jogador.posicao}</td>
                <td>${jogador.nome}</td>
                <td>${jogador.idade}</td>
                <td>${jogador.nivel}</td>
                <td>${jogador.preco}</td>
                
            </tr> `
        }

        if (jogador.posicao == inputPesquisar.value) {
            tbodyJogadores.innerHTML += `
            <tr>
                <td>${jogador.posicao}</td>
                <td>${jogador.nome}</td>
                <td>${jogador.idade}</td>
                <td>${jogador.nivel}</td>
                <td>${jogador.preco}</td>
                
            </tr> `
        }

        if (jogador.preco == inputPesquisar.value) {
            tbodyJogadores.innerHTML += `
            <tr>
                <td>${jogador.posicao}</td>
                <td>${jogador.nome}</td>
                <td>${jogador.idade}</td>
                <td>${jogador.nivel}</td>
                <td>${jogador.preco}</td>
                
            </tr> `
        }
    }
    // ABAIXO vai exibir apenas o jogador pesquisado.
})