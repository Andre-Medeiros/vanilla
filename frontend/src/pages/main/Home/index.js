import React from 'react';

import NavBar from '../NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Vendas from '../../components/Vendas';
import Funcionarios from '../../components/Funcionarios';
import Bau from '../../components/Bau';
import Ponto from '../../components/Ponto';
import BaterPonto from '../BaterPonto';

import logoImg from '../../../assets/Logo.svg';

import './styles-home.css';


export default function Home() {

    return (
        <Router>
            <div className="home-container">
                <header className="home-header">
                    <div className="header-container">
                        <div className="home-infos">
                            <span>Logado como: </span>
                            <span><strong>Tilan Bucano</strong> | <strong>28239</strong></span>
                        </div>
                        
                        <NavBar className="home-nav" />
                        <a className="home-logo" href="#"><img src={logoImg} alt="Logo" /></a>
                    </div>
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
                    <BaterPonto className="bater-ponto" />
                </footer>
            </div>
        </Router>
    );
}