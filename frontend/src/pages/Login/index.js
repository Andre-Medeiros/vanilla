import React from 'react';
import { Link } from 'react-router-dom';

import './styles-login.css';

import logoImg from '../../assets/Logo.svg';

export default function Login(){
    return(
        <section className='login-container'>
            <div className="login-form">
                <img className="login-logo" src={logoImg} alt="Logo" />

                <form className="login">
                    <input placeholder="Passaporte" />
                    <input placeholder="Senha" />
                </form>
                <Link className="button" to="/home" type="submit">Entrar</Link>
            </div>
        </section>
        
    );
}