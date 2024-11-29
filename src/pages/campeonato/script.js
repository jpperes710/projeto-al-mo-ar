import { campeonato, copa } from "../../data/newData.js";

const divCampeonato = document.getElementById('div-campeonato');

campeonato.map((e, index) => 
    divCampeonato.innerHTML += 
    `
        <div>
            <p>${e.time_casa} ${e.gols_casa} x ${e.gols_fora} ${e.time_fora}</p>
        </div>
    `
);

// Abaixo fazer o .map da copa semelhante ao do campeonato acima

