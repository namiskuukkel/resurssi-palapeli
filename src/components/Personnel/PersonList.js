
import React from 'react';
import Person from './Person'

let id = 0;

class PersonList extends React.Component {

    render() {
        const {personnel, newPerson, handlePersonChange, handleAddPerson} = this.props;
        return (
            <div>
                <h2>Moro</h2>
                <input type="text" value={newPerson} onChange={handlePersonChange} />
                <button onClick={handleAddPerson}>Add</button>
                <ul>
                    {personnel.map(person => <Person name={person.name} key={person.id} />)}
                </ul>
            </div>
        )
    }

}

export default PersonList;