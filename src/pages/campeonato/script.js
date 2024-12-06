import { campeonato, copa } from "../../data/newData.js";

const divCampeonato = document.getElementById('div-campeonato');

campeonato.map((e, index) => 
    divCampeonato.innerHTML += 
    `
        <div>
            <h6>${e.data} </h6>
            <p>${e.time_casa} ${e.gols_casa} x ${e.gols_fora} ${e.time_fora}</p>
            
        </div>
    `
);

const divCopa = document.getElementById('div-copa')

copa.map((e, index) => 
    divCopa.innerHTML += 
    `
        <div>
            <h6>${e.data} </h6>
            <p>${e.time_casa} ${e.gols_casa} x ${e.gols_fora} ${e.time_fora} </p>
        </div>
    `
);



