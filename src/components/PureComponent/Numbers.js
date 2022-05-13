import React, {Component} from 'react';

class Numbers extends Component{
    constructor(){
        super();
        this.state = {
            num: '',
            result: []
        }
    };
    handleOnChange = e => {
        const {target: {value}} = e;
        this.setState(state => {
            const result = state.result.push(value);
            return {
                result,
                num: '',
            };
        });
    };
    
    render(){
        return(
            <div>
                <input type="number" onChange={this.handleOnChange}/>
                <ul>
                    {this.state.result.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Numbers;