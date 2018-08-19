import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 1,
            time: 0,
            timer: null
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);

        this.upIntr = this.upIntr.bind(this);
        this.downIntr = this.downIntr.bind(this);
    }

    start() {
        if (!this.state.timer) {
            this.state.timer = setInterval(() => {
                this.setState(previousState => {
                    return { time: previousState.time + this.state.interval };
                });
            }, 1000 * this.state.interval)
        }
    }

    reset() {
        this.setState({
            time: 0
        });
    }

    stop() {
        clearInterval(this.state.timer);
        this.state.timer = null;

        this.reset();
    }

    upIntr() {
        clearInterval(this.state.timer);
        this.state.timer = null;

        this.state.interval += 1;
        this.start();
    }

    downIntr() {
        if (this.state.interval - 1 > 1) {
            this.state.interval -= 1;

            clearInterval(this.state.timer);
            this.state.timer = null;

            this.start();
        }
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
                <div className="timer">{this.secondToTime(this.state.time)}</div>
                <div className="button" onClick={this.start}>Start</div>
                <div className="button" onClick={this.stop}>Stop</div>
                <div className="button" onClick={this.reset}>Reset</div>

                <div className="button" onClick={this.upIntr}>[+]</div>
                <div className="button" onClick={this.downIntr}>[-]</div>    
            </div>;
    }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();