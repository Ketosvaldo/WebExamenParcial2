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
    setValue1 = e =>{
        const {target: {value}} = e;
        this.setState({
            input1: value,
        })
        switch(this.operator){
            case "suma": this.setState({
                res: parseInt(this.state.input1) + parseInt(this.state.input2),
            });
            break;
            case "resta": this.setState({
                res: this.state.input1 - this.state.input2,
            });
            break;
            case "mult": this.setState({
                res: this.state.input1 * this.state.input2,
            });
            break;
            case "divi": this.setState({
                res: this.state.input1 / this.state.input2,
            });
            break;
        }
    };
    setValue2 = e =>{
        const {target: {value}} = e;
        this.setState({
            input2: value,
        })
        switch(this.operator){
            case "suma": this.setState({
                res: parseInt(this.state.input1) + parseInt(this.state.input2),
            });
            break;
            case "resta": this.setState({
                res: this.state.input1 - this.state.input2,
            });
            break;
            case "mult": this.setState({
                res: this.state.input1 * this.state.input2,
            });
            break;
            case "divi": this.setState({
                res: this.state.input1 / this.state.input2,
            });
            break;
        }
    };
    handleOnChange = e => {
        const {target: {value}} = e;
        this.setState({
            operator: value,
        });
        switch(value){
            case "suma": this.setState({
                res: parseInt(this.state.input1) + parseInt(this.state.input2),
            });
            break;
            case "resta": this.setState({
                res: this.state.input1 - this.state.input2,
            });
            break;
            case "mult": this.setState({
                res: this.state.input1 * this.state.input2,
            });
            break;
            case "divi": this.setState({
                res: this.state.input1 / this.state.input2,
            });
            break;
        }
    };
    render(){
        return(
            <div className='back'>
                <div className='calculator'>
                    <input type="number" onChange={this.setValue1} className='text'/>
                    <select onChange={this.handleOnChange} className='select'>
                        <option value="suma">+</option>
                        <option value="resta">-</option>
                        <option value="mult">*</option>
                        <option value="divi">/</option>
                    </select>
                    <input type="number" onChange={this.setValue2} className='text'/>
                </div>
                <div>
                    <h2>Result</h2>
                    <div className='box'>
                        <h2 className='resultado'>{this.state.res}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;