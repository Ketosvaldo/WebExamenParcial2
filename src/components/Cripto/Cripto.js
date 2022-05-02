import React, {Component} from "react";
import './Cripto.css';

class Cripto extends Component{
    constructor(){
        super();
        this.state = {
            crypt: 0,
            money: 0,
            message: "",
        }
    }
    handleOnChange = e => {
        const {target: {value}} = e;
        this.setState({
            money: value,
            message: "",
        });
    }
    handleOnClick = () =>{
        const m = parseInt(this.state.money);
        if(m % 10 === 0){
            this.setState({
                crypt: m/10,
            });
        }
        else{
            this.setState({
                message: "Inserte solo múltiplos de 10",
            });
        }
    }
    render(){
        return(
            <div className="Cripto">
                <div className="title">
                    Compra Crypto Coins
                </div>
                <div className ="instructions">
                    Dólares a invertir
                </div>
                <img src="https://c.tenor.com/AQecc2g8uuAAAAAC/duck-dance.gif" className="puto"></img>
                <div className="input">
                    <input type="number" onChange={this.handleOnChange} value={this.state.money}/>
                    <button onClick={this.handleOnClick}>Subir</button>
                </div>
                <div className="instructions">
                    Precio de Crypto Coins $10
                </div>
                <div className="alert">{this.state.message}</div>
                <div className="result">
                    Puedes comprar {this.state.crypt} monedas
                </div>
            </div>
        )
    }
}

export default Cripto;