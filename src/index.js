import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            timer: null
        };

        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    }

    start() {
        if (!this.state.timer) {
            this.state.timer = setInterval(() => {
                this.setState(previousState => {
                    return { time: previousState.time + 1 };
                });
            }, 1000)
        }
    }

    stop() {
        clearInterval(this.state.timer);
        this.state.time = 0;
    }

    pause() {
        clearInterval(this.state.timer);
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
                <h2>{this.secondToTime(this.state.time)}</h2>
                <div onClick={this.start}>Start</div>
                <div onClick={this.pause}>Pause</div>
                <div onClick={this.stop}>Stop</div>
            </div>;
    }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();