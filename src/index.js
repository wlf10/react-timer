import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Timer';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: 0};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { time: previousState.time + 1 };
            });
        }, 1000);
    }

    render() {
        return <h2>{this.state.time}</h2>;
    }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();