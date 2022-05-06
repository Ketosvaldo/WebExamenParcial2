import React, {Component} from "react";
import './Cripto.css';

class Cripto extends Component{
    constructor(){
        super();
        this.state = {
            money: 0,
        }
    }
    handleOnChange = e => {
        this.setState({
            money:Number(e.target.value)
        })
    }
    shouldComponentUpdate(props, state){
        if(state.money % 10 === 0){
            return true
        }
        return false
    }
    render(){
        return(
            <div className="Cripto">
                <h1>Compra Crypto Coins</h1>
                <div className ="instructions">
                    <p>¿Cuántos dólares tienes?</p>
                    <img src="https://c.tenor.com/AQecc2g8uuAAAAAC/duck-dance.gif"></img>
                    <p>
                        <input 
                            type="number" 
                            onChange={this.handleOnChange} 
                            placeholder='0'/>
                    </p>
                </div>

                <div className="answer">
                    <p>Precio de Crypto Coins: $10</p>
                    <p>
                        Puedes comprar <strong>{this.state.money/10}</strong> monedas
                    </p>
                </div>
            </div>
        );
    }
}

export default Cripto;