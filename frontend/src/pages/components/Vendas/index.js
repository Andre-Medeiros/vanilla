import React, {Component} from 'react';

import './styles-vendas.css';

export class Vendas extends Component{

    constructor(props) {
        super(props);
        this.state = {value: 'agua'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Seu sabor favorito é: ' + this.state.value);
        event.preventDefault();
      }

    render(){
        return(
            <section className="vendas-section">
                <button className="button">Adicionar</button>

                <form className="form-patern venda">
                    <p className="vendas-vendedor">Vendedor: Tilan Bucano | 28239</p>
                    <div className="vendas-bebidas">

                        <p>Bebidas:</p>
                        <select className="vendas-menu" value={this.state.value} onChange={this.handleChange}>
                            <option value="energetico">Energético</option>
                            <option value="whisky">Whisky</option>
                            <option value="tequila">Tequila</option>
                            <option value="vodka">Vodka</option>
                            <option value="cerveja">Cerveja</option>
                            <option value="agua">Água</option>
                            <option value="haburguer">Haburguer</option>
                        </select>

                        <p>Quantidade:</p>
                        <input className="vendas-quant"></input>
                        <p>Desconto:</p>
                        <select className="vendas-menu" type="text">
                            <option value="00%">sem desconto</option>
                            <option value="05%">05% de desconto</option>
                            <option value="10%">10% de desconto</option>
                            <option value="15%">15% de desconto</option>
                            <option value="25%">25% de desconto</option>
                        </select>

                    </div>

                    <button className="btn-add">+</button>
                    <p className="vendas-total">Total da Venda: R$ 135.000,00</p>
                    <button className="btn-save">Salvar</button>

                </form>

                <form className="form-patern venda">
                    <p className="vendas-vendedor">Vendedor: Tilan Bucano | 28239</p>
                    <div className="vendas-bebidas">

                        <p>Bebidas:</p>
                        <select className="vendas-menu" value={this.state.value} onChange={this.handleChange}>
                            <option value="energetico">Energético</option>
                            <option value="whisky">Whisky</option>
                            <option value="tequila">Tequila</option>
                            <option value="vodka">Vodka</option>
                            <option value="cerveja">Cerveja</option>
                            <option value="agua">Água</option>
                            <option value="haburguer">Haburguer</option>
                        </select>

                        <p>Quantidade:</p>
                        <input className="vendas-quant"></input>
                        <p>Desconto:</p>
                        <select className="vendas-menu" type="text">
                            <option value="00%">sem desconto</option>
                            <option value="05%">05% de desconto</option>
                            <option value="10%">10% de desconto</option>
                            <option value="15%">15% de desconto</option>
                            <option value="25%">25% de desconto</option>
                        </select>

                    </div>

                    <button className="btn-add">+</button>
                    <p className="vendas-total">Total da Venda: R$ 135.000,00</p>
                    <button className="btn-save">Salvar</button>

                </form>

                <form className="form-patern venda">
                    <p className="vendas-vendedor">Vendedor: Tilan Bucano | 28239</p>
                    <div className="vendas-bebidas">

                        <p>Bebidas:</p>
                        <select className="vendas-menu" value={this.state.value} onChange={this.handleChange}>
                            <option value="energetico">Energético</option>
                            <option value="whisky">Whisky</option>
                            <option value="tequila">Tequila</option>
                            <option value="vodka">Vodka</option>
                            <option value="cerveja">Cerveja</option>
                            <option value="agua">Água</option>
                            <option value="haburguer">Haburguer</option>
                        </select>

                        <p>Quantidade:</p>
                        <input className="vendas-quant"></input>
                        <p>Desconto:</p>
                        <select className="vendas-menu" type="text">
                            <option value="00%">sem desconto</option>
                            <option value="05%">05% de desconto</option>
                            <option value="10%">10% de desconto</option>
                            <option value="15%">15% de desconto</option>
                            <option value="25%">25% de desconto</option>
                        </select>

                    </div>

                    <button className="btn-add">+</button>
                    <p className="vendas-total">Total da Venda: R$ 135.000,00</p>
                    <button className="btn-save">Salvar</button>

                </form>

                <form className="form-patern venda">
                    <p className="vendas-vendedor">Vendedor: Tilan Bucano | 28239</p>
                    <div className="vendas-bebidas">

                        <p>Bebidas:</p>
                        <select className="vendas-menu" value={this.state.value} onChange={this.handleChange}>
                            <option value="energetico">Energético</option>
                            <option value="whisky">Whisky</option>
                            <option value="tequila">Tequila</option>
                            <option value="vodka">Vodka</option>
                            <option value="cerveja">Cerveja</option>
                            <option value="agua">Água</option>
                            <option value="haburguer">Haburguer</option>
                        </select>

                        <p>Quantidade:</p>
                        <input className="vendas-quant"></input>
                        <p>Desconto:</p>
                        <select className="vendas-menu" type="text">
                            <option value="00%">sem desconto</option>
                            <option value="05%">05% de desconto</option>
                            <option value="10%">10% de desconto</option>
                            <option value="15%">15% de desconto</option>
                            <option value="25%">25% de desconto</option>
                        </select>

                    </div>

                    <button className="btn-add">+</button>
                    <p className="vendas-total">Total da Venda: R$ 135.000,00</p>
                    <button className="btn-save">Salvar</button>

                </form>
            </section>
        );
    }
}

export default Vendas;