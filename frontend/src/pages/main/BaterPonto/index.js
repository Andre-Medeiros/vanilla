import React from 'react';

import './styles-bater-ponto.css';

export default function BaterPonto() {
    
    return(
        <div className="footer">
            <div className="bater-ponto">
                <h1>Bater Ponto!</h1>
                <button className="button btn-ponto" >Ponto Aberto</button>
                <p>Tempo Trabalhado: 02 horas 47 min</p>
            </div>

            <div className="copyridth">
                <label>Copyrigth Vanilla's Club - South RP 2020</label>
            </div>
        </div>
    );
    
}