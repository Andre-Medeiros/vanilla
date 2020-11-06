import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendario from './Calendario';

import './styles-ponto.css';



export default function Ponto() {

    return (
        <div className="ponto-section">
            <div className="form-patern ponto-campo">
                <div className="filtro1">
                    <p className="ponto-passaporte">Passaporte:</p>
                    <select className="ponto-seletor"></select>
                    <p className="ponto-id">xxx</p>
                    <p className="ponto-funcao">Função: xxx</p>
                    <p className="ponto-data-adm">Data de admição: xx</p>
                </div>

                <div className="filtro2">
                    <p className="ponto-data-in">Data de inicio: </p>
                    <p className="ponto-data-end">Data de fim: </p>
                    <Calendario className="ponto-seletor" />
                    
                    <button className="button btn-pqs">Pesquisar</button>
                </div>
            </div>
        </div>
    );
}