import React, {Component} from 'react';

import './styles-func.css';

export class Funcionarios extends Component{

    render(){
        return(
            <section className="func-section">

                <button className="button btn-funcionarios">Cadastrar</button>

                <div className="form-funcionario">
                    <div className="dados-funcionario">
                        <p className="nome-func">Tilan Bucano | 28239</p>
                        <p className="descricao-func">Descrição: Administração de vendas</p>
                        <p className="data-func">Data de Admição: 08/09/2020</p>
                        <p className="ierarquia-func">Ierarquia: Administrador</p>
                        <p className="acesso-func">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button btn-edit">Editar</button>
                    <button className="button btn-remove">Remover</button>
                </div>

                <div className="form-funcionario">
                    <div className="dados-funcionario">
                        <p className="nome-func">Tilan Bucano | 28239</p>
                        <p className="descricao-func">Descrição: Administração de vendas</p>
                        <p className="data-func">Data de Admição: 08/09/2020</p>
                        <p className="ierarquia-func">Ierarquia: Administrador</p>
                        <p className="acesso-func">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button btn-edit">Editar</button>
                    <button className="button btn-remove">Remover</button>
                </div>

                <div className="form-funcionario">
                    <div className="dados-funcionario">
                        <p className="nome-func">Tilan Bucano | 28239</p>
                        <p className="descricao-func">Descrição: Administração de vendas</p>
                        <p className="data-func">Data de Admição: 08/09/2020</p>
                        <p className="ierarquia-func">Ierarquia: Administrador</p>
                        <p className="acesso-func">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button btn-edit">Editar</button>
                    <button className="button btn-remove">Remover</button>
                </div>

                <div className="form-funcionario">
                    <div className="dados-funcionario">
                        <p className="nome-func">Tilan Bucano | 28239</p>
                        <p className="descricao-func">Descrição: Administração de vendas</p>
                        <p className="data-func">Data de Admição: 08/09/2020</p>
                        <p className="ierarquia-func">Ierarquia: Administrador</p>
                        <p className="acesso-func">Acesso ao sistema: Sim</p>
                    </div>
                    <button className="button btn-edit">Editar</button>
                    <button className="button btn-remove">Remover</button>
                </div>
            </section>
        );
    }
}

export default Funcionarios;