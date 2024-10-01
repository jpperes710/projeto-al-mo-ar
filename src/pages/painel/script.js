import { times } from "../../data/data.js";

const tbodyJogadores = document.getElementById('tbody-jogadores');
const inputPesquisar = document.getElementById('input-pesquisar');
const btnPesquisar = document.getElementById('btn-pesquisar');

const alMocar = times[0];

for (const jogador of alMocar.jogadores) {
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

    for (const jogador of alMocar.jogadores) {
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