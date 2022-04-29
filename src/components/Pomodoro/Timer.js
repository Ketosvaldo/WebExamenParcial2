import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component{
    constructor(){
        super()
        this.state = {
            time: 0,
            alert: {
                type: "",
                message: ""
            }
        }
    }

    componentDidMount(){
        this.setDefaultTime()
    }

    setDefaultTime(){
        this.setState({
            time: this.times.defaultTime
        })
    }

    //BUTTONS
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            }
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break'
            }
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break'
            }
        })
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setTime({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeep',
                }
            })
        }
        else{
            this.setState({
                time: this.state.time -1
            });
        }
    }

    displayTimer(seconds){
        
    }

    render(){
        const {alert: { message, type }, time } = this.state;

        return(
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className ="timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button
                        className = "start"
                        onClick = {this.setTimeForWork}
                    >
                        Start Working
                    </button>
                    
                    <button
                        className = "short"
                        onClick = {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    
                    <button
                        className = "long"
                        onClick = {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;