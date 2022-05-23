import React, {Component} from 'react';
import './Calculator.css';
class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            input1: 0,
            input2: 0,
            res: 0,
            operator: "suma",
        }
    };

    handleOnChange = e => {
        const {target: {value, name, type}} = e;
        const val = type === 'text' ? Number(value):value;
        
        this.setState({
            [name]: val,
        });
    };

    handleResult = e => {
        const {number1, number2, operator} = this.state;

        this.setState({
            res: calculateResult(number1, number2, operator)
        })
    };

    handleSelect = e => {
        const {target: {value}} = e;
        this.setState({
            operator: value
        })
    }
    render(){
        return(
            <div className='back'>
                <div className='calculator'>
                    <input name="number1" type="text" onChange={this.handleOnChange} className='text'/>
                    <select onChange={this.handleSelect} className='select'>
                        <option value="suma">+</option>
                        <option value="resta">-</option>
                        <option value="mult">*</option>
                        <option value="divi">/</option>
                    </select>
                    <input name="number2" type="text" onChange={this.handleOnChange} className='text'/>
                </div>
                <div>
                    <h2>Result</h2>
                    <div className='box'>
                        <button onClick={this.handleResult}>Calcular</button>
                        <h2 className='resultado'>{this.state.res.toFixed(2)}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

function calculateResult(num1, num2, op) {
    switch(op){
        case "suma":
            return num1 + num2;
        case "resta": 
            return num1 - num2;
        case "mult":
            return num1*num2;
        case "divi":
            return num1/num2;
    }
}
export default Calculator;