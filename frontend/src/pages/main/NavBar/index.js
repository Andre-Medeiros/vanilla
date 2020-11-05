import React from 'react';
import { Link } from 'react-router-dom';

import './styles-navbar.css';

const NavBar = () => {

    return (

        <nav className="home-nav">
            <Link to="/vendas" >Venda de Bebidas</Link>
            <Link to="/ponto">Folha de Ponto</Link>
            <Link to="/bau">Controle do Baú</Link>
            <Link to="/funcionarios">Funcionarios</Link>
            <div className="animation start-home"></div>
        </nav>
    );
}

export default NavBar;