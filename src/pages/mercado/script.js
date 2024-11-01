import { jogadores } from "../../data/newData.js";

const inputPesquisa = document.getElementById('input-pesquisa');
const divResultadoPesquisa = document.getElementById('resultado-pesquisa');


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
                <td><a class="btn btn-success" href="../negociar/negociar.html?id=${jogador.id_jogador}">Negociar</a></td>
            </tr>
            `
        }
    }
})