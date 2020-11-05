import React, {Component} from 'react';

import './styles-func.css';

export class Funcionarios extends Component{

    render(){
        return(
            <section className="func-section">

                <button className="button">Cadastrar</button>

                <div className="form-patern func-form">
                    <div className="func-dados">
                        <p className="func-nome">Tilan Bucano | 28239</p>
                        <p className="func-descricao">Descrição: Administração de vendas</p>
                        <p className="func-data">Data de Admição: 08/09/2020</p>
                        <p className="func-ierarquia">Ierarquia: Administrador</p>
                        <p className="func-acesso">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button editar">Editar</button>
                    <button className="button remover">Remover</button>
                </div>

                <div className="form-patern func-form">
                    <div className="func-dados">
                        <p className="func-nome">Tilan Bucano | 28239</p>
                        <p className="func-descricao">Descrição: Administração de vendas</p>
                        <p className="func-data">Data de Admição: 08/09/2020</p>
                        <p className="func-ierarquia">Ierarquia: Administrador</p>
                        <p className="func-acesso">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button editar">Editar</button>
                    <button className="button remover">Remover</button>
                </div>

                <div className="form-patern func-form">
                    <div className="func-dados">
                        <p className="func-nome">Tilan Bucano | 28239</p>
                        <p className="func-descricao">Descrição: Administração de vendas</p>
                        <p className="func-data">Data de Admição: 08/09/2020</p>
                        <p className="func-ierarquia">Ierarquia: Administrador</p>
                        <p className="func-acesso">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button editar">Editar</button>
                    <button className="button remover">Remover</button>
                </div>

                <div className="form-patern func-form">
                    <div className="func-dados">
                        <p className="func-nome">Tilan Bucano | 28239</p>
                        <p className="func-descricao">Descrição: Administração de vendas</p>
                        <p className="func-data">Data de Admição: 08/09/2020</p>
                        <p className="func-ierarquia">Ierarquia: Administrador</p>
                        <p className="func-acesso">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button editar">Editar</button>
                    <button className="button remover">Remover</button>
                </div>
                
            </section>
        );
    }
}

export default Funcionarios;