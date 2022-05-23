import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component{
    constructor(){
        super();
        this.state = {
            time: 0,
            min: 0,
            sec: 0,
            alert: {
                type: "",
                message: ""
            },
            pause: 0,
            running: 0,
            classState: ""
        };

        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900,
        };
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
            },
            running: 1
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break'
            },
            running: 1
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break'
            },
            running: 1
        })
        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
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
            if(this.state.pause === 0){
                this.setState({
                    time: this.state.time -1
                });
            }
            else{
                this.setState({
                    time: this.state.time
                });
            }
        }
    }

    buttonRender(running){
        if(running === 1){
            return(
            <p>
                <button onClick={this.pauseTime}><img src ={this.state.classState} height = "80" width = "80"/></button>
                <button onClick={this.stopTime}><img src="https://cdn1.iconfinder.com/data/icons/system-play-set-2/64/stop-512.png" height = "80" width = "80"/></button>
            </p>
            )
        }
        else{
            return(
                <p></p>
            )
        }
    }

    stopTime = () => {
        clearInterval(this.interval);
        this.setState({
            running: 0,
            alert:{
                type: 'nothing',
                message: '',
            }
        });
        this.setDefaultTime();
    }

    pauseTime = () => {
        if(this.state.pause === 0){
            this.setState({
                pause: 1,
                classState: "https://cdn-icons-png.flaticon.com/512/0/375.png"
            })
        }
        else{
            this.setState({
                pause: 0,
                classState: "https://cdn.onlinewebfonts.com/svg/img_78429.png"
            })
        }
    }

    displayTimer(seconds){
        const m = Math.floor(seconds/60);
        const s = seconds %= 60; 
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render(){
        const {alert: { message, type }, time, running, pause, classState } = this.state;

        return(
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className ="timer">
                    {this.displayTimer(this.state.time)}
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
                <div>
                    {this.buttonRender(running)}
                </div>
            </div>
        );
    }
}

export default Timer;