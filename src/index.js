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
                <div className="timer" style={{ fontSize: 36, float: 'left'}}>{this.secondToTime(this.state.time)}</div>
                
                <div id="buttons" style={{ width: 100, float: 'left', marginLeft: 15, marginTop: 3 }}>
                    <div onClick={this.start} style={{ float: 'left',  width: '33%' }}>
                        <svg id="start-icon" className="start-icon" viewBox="0 0 36 36">
                            <path id="svg_start" fill="#006DF0" d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"/>
                        </svg>
                    </div>
                    <div onClick={this.stop} style={{  float: 'left', width: '33%' }}>
                        <svg id="pause-icon" className="pause-icon" viewBox="0 0 36 36">
                            <path id="svg_pause"  data-state="paused"  d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />
                        </svg>
                    </div>
                    <div onClick={this.reset} style={{  float: 'left', width: '33%' }}>
                        <svg id="Two-Tone" x="0px" y="0px" viewBox="0 0 60 60">
                            <path id="svg_reset" d="M35.077208,45.876119c7.354758,-0.757705 13.249049,-6.164965 14.087881,-12.929206c1.100967,-8.844486 -6.373624,-16.373321 -15.743076,-16.469756l0,-3.96762c0,-0.220423 -0.299583,-0.337523 -0.501801,-0.199759l-8.88263,5.999648c-0.149791,0.103323 -0.149791,0.303082 0,0.406406l8.88263,5.999648c0.202218,0.137765 0.501801,0.013776 0.501801,-0.199759l0,-3.960732c6.583332,0.096435 11.855989,5.248831 11.406615,11.406907c-0.381968,5.297048 -5.077928,9.595303 -10.837408,9.932826c-6.103999,0.358188 -11.294271,-3.650761 -12.222978,-8.954698c-0.17226,-0.985017 -1.108456,-1.701393 -2.186954,-1.701393c-1.340633,0 -2.389173,1.095228 -2.179465,2.314445c1.303185,7.556387 8.890119,13.2254 17.675385,12.323042z"/>
                        </svg>
                    </div>
                    <div style={{ clear: 'left' }}></div>
                </div>

                <div className="button" onClick={this.upIntr} style={{ clear: 'left' }}>[+]</div>
                <div className="button" onClick={this.downIntr} style={{ clear: 'left' }}>[-]</div>    
            </div>;
    }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();