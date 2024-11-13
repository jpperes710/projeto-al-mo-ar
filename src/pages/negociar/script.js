import { jogadores, times } from "../../data/newData.js";

// Pegando da URL o parametro id
const parametros = new URLSearchParams(window.location.search);
const id_jogador = parametros.get('id');
// Encerrando Pegando da URL o parametro id

const divJogador = document.getElementById('div-jogador');

// Encontrando o jogador
const findJogador = jogadores.find(e => e.id_jogador == id_jogador);
// Encerrando Encontrando o jogador

const findTime = times.find((e, i) => e.id_time === findJogador.id_time)
console.log(findTime)

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
            <td> ${findTime.nome} </td>
            <td> ${findJogador.preco}</td>
            <td><a class="btn btn-success" id="botao-proposta">Enviar Proposta</a></td>
        </tbody>
    </table>
`
// Encerrando Criando o jogador na tela

const botaoProposta = document.getElementById("botao-proposta")
botaoProposta.addEventListener("click", () => {
    const valorProposta = document.getElementById("valor-proposta").value
    
    if (valorProposta < findJogador.preco) {
        alert("sua proposta foi recusada")    
    }
    if (valorProposta == findJogador.preco) {
        alert("10%")
    }
    if (valorProposta > findJogador.preco && valorProposta < findJogador.preco*2) {
        alert("40%")
    }
    if (valorProposta == findJogador.preco*2) {
        alert("80%")
    }
    if (valorProposta > findJogador.preco*2) {
        alert("98%")
    }

})