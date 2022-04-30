import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Ketosvaldo',
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Ketchul'
            })
        }, 2000);
    }

    render(){
        const buttonStyle={
            backgroundColor: 'gray',
            border: '1px solid red',
        }

        const {name} = this.state;

        return(
            <div className="Home">
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>

                <a href="https://www.facebook.com/">Robo de datos jsjs</a>
                <div>
                    <button style={{
                        backgroundColor:'red',
                        border: '1px solid black',
                    }}>Click
                    </button>
                    <button style={buttonStyle}>
                        Click
                    </button>
                </div>
            </div>            
        );
    }
}

export default Home;