import React from 'react';
import ReactDOM from 'react-dom';

import Task from 'components/Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'hasFilter': false,
            'filters': {
                'open': false,
                'progress': false,
                'done': false
            }
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e) {
        console.log(this.state);

        let id = e.target.id;

        this.setState(prevState => ({
            'filters': {
                ...prevState.filters,
                [id]: !prevState.filters[id]
            }
        }));

        this.setState(prevState => ({
            'hasFilter': prevState.filters.open || prevState.filters.progress || prevState.filters.done
        }));
    }

    render() {
        const {items} = this.props;

        const buttonStyle = {
            width: '55px',
            margin: '5px 12px',
            padding: '2px',
            float: 'left',
            border: '1px solid black',
            textAlign: 'center',
            backgroundColor: 'green'
        };

        return (
            <div>
                <div style={{ width: 300}}>
                    <div
                        id="open"
                        style={{ ...buttonStyle, backgroundColor: this.state.filters.open ? 'green' : 'grey' }}
                        onClick={this.handleFilter}
                    >
                        Open
                    </div>
                    <div
                        id="progress"
                        style={{ ...buttonStyle, width: 100, backgroundColor: this.state.filters.progress ? 'green' : 'grey' }}
                        onClick={this.handleFilter}
                    >
                        In progress
                    </div>
                    <div
                        id="done"
                        style={{ ...buttonStyle, float: 'right', backgroundColor: this.state.filters.done ? 'green' : 'grey'  }}
                        onClick={this.handleFilter}
                    >
                        Done
                    </div>
                </div>
                <div style={{ clear: 'left'}}></div>
                {
                    items.reduce((previous, item) => {
                        if (!this.state.hasFilter || this.state.filters[item.group]) {
                            return [
                                ...previous,
                                <div key={item.id} style={{ width: 300}}>
                                    <Task task={item} />
                                </div>
                            ]
                        } else {
                            return [
                                ...previous
                            ]
                        }
                    }, [])                        
                }
            </div>
        );
    }
}
