import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendario from './Calendario';

import './styles-ponto.css';



export default function Ponto() {

    return (
        <div className="container">
        <div className="ponto-section">
            <div className="form-patern ponto-campo">
                <div className="filtro1">
                    <p className="ponto-passaporte">Passaporte:</p>
                    <select className="ponto-seletor" type="text">
                        <option value="28239">Tilan Bucano</option>
                        <option value="27770">Brock Broca</option>
                        <option value="27772">Sol Lunaris</option>
                    </select>
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

        <div className="planilha">
            <div className= "separador-horizontal"></div>

            <div className="indice">
                <div className="separador-vertical"></div>
                <label>Nome</label>
                <div className="separador-vertical"></div>
                <label>Passaporte</label>
                <div className="separador-vertical"></div>
                <label>Data</label>
                <div className="separador-vertical"></div>
                <label>Entrada</label>
                <div className="separador-vertical"></div>
                <label>Saida</label>
                <div className="separador-vertical"></div>
                <label>Horas Totais</label>
                <div className="separador-vertical"></div>
                <label>Receber</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

            <div className="resultado">
                <div className= "separador-vertical"></div>
                <label>Tilan Bucano</label>
                <div className="separador-vertical"></div>
                <label>28239</label>
                <div className="separador-vertical"></div>
                <label>07/11/2020</label>
                <div className="separador-vertical"></div>
                <label>12:00</label>
                <div className="separador-vertical"></div>
                <label>17:00</label>
                <div className="separador-vertical"></div>
                <label>05:00</label>
                <div className="separador-vertical"></div>
                <label>Sim</label>
                <div className="separador-vertical"></div>
            </div>

            <div className= "separador-horizontal"></div>

        </div>
    </div>
    );
}