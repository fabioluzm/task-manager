import React, { Component } from 'react'
import Tasks from './components/Tasks'
import { FormControl, InputGroup, Button, Col } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ['2'],
            input: ''
        }
    }

    addTask() {
        if (this.state.input !== '') {

			this.setState({
				tasks: [...this.state.tasks, this.state.input],
				input: ''
			});
        }
        
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='ml-3 mb-3'>
                    
                    <Tasks tasks = {this.state.tasks} />
                </div>

                <InputGroup as={Col} md="5">
                    <FormControl
                        value={this.state.input}
                        onChange={event => this.setState({input: event.target.value})}
                        onKeyPress={event => event.key === 'Enter' ? this.addTask() : ''}
                        type="text"
                    />
                    <InputGroup.Append>
                        <Button
                            onClick={() => this.addTask()}
                            >
                            Add Task
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default App;
