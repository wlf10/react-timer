import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 1,
            time: 0
        };

        this.timerId = null;

        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.setState(previousState => {
                    return { time: previousState.time + this.state.interval };
                });
            }, 1000 * this.state.interval)
        }
    }

    stop() {
        this.pause();
        this.setState({
            time: 0
        });
    }

    pause() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    secondToTime(sec) {
        var minutes = Math.floor(sec / 60);
        var seconds = sec - (minutes * 60);

        var time = (minutes < 10 ? '0' : '');
        time += minutes + ':';

        time += (seconds < 10 ? '0' : '');
        time += seconds;

        return time;
    }

    render() {
        return <div>
                <div className="timer" style={{ fontSize: 36, float: 'left'}}>{this.secondToTime(this.state.time)}</div>
                
                <div id="buttons" style={{ width: 100, float: 'left', marginLeft: 15, marginTop: 3 }}>
                    <div onClick={this.start} style={{ float: 'left',  width: '30%'}}>
                        <svg id="start-icon" className="start-icon" viewBox="0 0 12 12">
                            <path id="svg_start" fill="#009933" d="M3,2 L11.5,6.5 3,11"/>
                        </svg>
                    </div>
                    <div onClick={this.pause} style={{  float: 'left', width: '30%' }}>
                        <svg id="pause-icon" className="pause-icon" viewBox="0 0 12 12">
                            <path id="svg_pause" fill="#006DF0" data-state="paused"  d="M2,2 L5,2 5,11 2,11 z M8,2 L11,2 11,11 8,11 z" />
                        </svg>
                    </div>
                    <div onClick={this.stop} style={{  float: 'left', width: '30%' }}>
                        <svg id="Two-Tone" x="0px" y="0px" viewBox="0 0 12 12">
                            <path id="svg_stop" d="M2,2 L11,2 11,11 2,11 z"/>
                        </svg>
                    </div>
                </div>    
            </div>;
    }
}
