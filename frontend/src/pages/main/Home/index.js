import React from 'react';

import NavBar from '../NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Vendas from '../../components/Vendas';
import Funcionarios from '../../components/Funcionarios';
import Bau from '../../components/Bau';
import Ponto from '../../components/Ponto';

import logoImg from '../../../assets/Logo.svg';

import './styles-home.css';


export default function Home() {

    return (
        <Router>
            <div className="home-container">
                <header className="home-header">
                    <div className="home-infos">
                        <span>Logado como: </span>
                        <span>Tilan Bucano | 28239</span>
                    </div>

                    <NavBar />

                    <a className="home-logo" href="#"><img src={logoImg} alt="Logo" /></a>
                </header>

                <main className="home-content">
                    <div>
                        <Switch>
                            <Route path="/funcionarios" component={Funcionarios} />
                            <Route path="/vendas" component={Vendas} />
                            <Route path="/bau" component={Bau} />
                            <Route path="/ponto" component={Ponto} />
                        </Switch>
                    </div>
                </main>

                <footer className="home-footer">
                    <h1>Bater Ponto!</h1>
                    <button className="button" >Ponto Aberto</button>
                    <p>Tempo Trabalhado: 02 horas 47 min</p>
                </footer>
            </div>
        </Router>
    );
}