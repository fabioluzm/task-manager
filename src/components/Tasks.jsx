import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap'

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props.tasks
        }
    }

    removeTask(index) {
        
        this.setState({
            tasks: this.props.tasks.splice(index,1)
        })
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <h4>
                    Number of Tasks: {this.props.tasks.length}
                </h4>

                <ListGroup as={Col} md='5'>
                    {this.props.tasks.map((task, index) =>
                        <ListGroupItem key={index} >
                            <button
                                onClick={() => this.removeTask(index)}
                            >
                                Delete
                            </button>
                            {task}
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        )
    }
}

export default Tasks
