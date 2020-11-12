import React from 'react';
import { Link } from 'react-router-dom';

import './styles-login.css';

import logoImg from '../../assets/Logo.svg';

export default function Login(){
    return(
            <form action="">
                <img className="login-logo" src={logoImg} alt="Logo" />

                <div className="input">
                    <input required type="text" />
                    <label>Passaporte</label>
                    <span className="error"></span>
                </div>

                <div className="input">
                    <input required type="password" />
                    <label>Senha</label>
                    <span className="error"></span>
                </div>

                <Link className="button" to="/home" type="submit">Entrar</Link>

            </form>        
    );
}