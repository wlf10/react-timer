import React from 'react';
import TaskList from 'components/TaskList';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'tasks': props.tasks
        }
    }

    render() {
        return (
            <div>
                <TaskList items={this.state.tasks} />
            </div>
        );
    }
}
