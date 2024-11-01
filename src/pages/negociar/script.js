import { jogadores } from "../../data/newData.js";

// Pegando da URL o parametro id
const parametros = new URLSearchParams(window.location.search);
const id_jogador = parametros.get('id');
// Encerrando Pegando da URL o parametro id

const divJogador = document.getElementById('div-jogador');

// Encontrando o jogador
const findJogador = jogadores.find(e => e.id_jogador == id_jogador);
// Encerrando Encontrando o jogador

// Criando o jogador na tela
divJogador.innerHTML += `
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Jogador</th>
                <th>Time</th>
                <th>Preço</th>
                <th>Negociação</th>
            </tr>
        </thead>
        <tbody>
            <td>
                ${findJogador.nome}
            </td>
            <td> // campo com id do time </td>
            <td>// campo correto</td>
            <td>// botão para criar negociação</td>
        </tbody>
    </table>
`
// Encerrando Criando o jogador na tela
