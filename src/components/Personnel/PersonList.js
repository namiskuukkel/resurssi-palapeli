
import React from 'react';
import Person from './Person'

let id = 0;

class PersonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personnel: [],
            newPerson: ''
        }
    }
    handleAddPerson = (event) => {

        event.preventDefault();

        const np = { name: this.state.newPerson, id: id++ };
        this.setState({ personnel: this.state.personnel.concat(np) });
        this.setState({ newPerson: '' });
    };

    handlePersonChange = (event) => {

        this.setState({ newPerson: event.target.value });
    };

    render() {
        return (
            <div>
                <h2>Moro</h2>
                <input type="text" value={this.state.newPerson} onChange={this.handlePersonChange} />
                <button onClick={this.handleAddPerson}>Add</button>
                <ul>
                    {this.state.personnel.map(person => <Person name={person.name} key={person.id} />)}
                </ul>
            </div>
        )
    }

}

export default PersonList;