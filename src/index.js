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
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
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

    reset() {
        // TODO: Тут хотел также остановить счетчик, но данные не обновляются
        this.state.time = 0;
    }

    stop() {
        clearInterval(this.state.timer);
        this.state.timer = null;
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
            </div>;
    }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();