import React from 'react';
import ReactDOM from 'react-dom';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {task} = this.props;

        return (
            <div style={{ margin: 10, padding: 5, border: '1px solid'}}>
                <div>{task.name}</div>
            </div>
        );
    }
}
