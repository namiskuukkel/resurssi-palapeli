
import React from 'react';
import Person from './Person'

class PersonList extends React.Component {

    render() {
        const {personnel, newPerson, handlePersonChange, handleAddPerson} = this.props;
        return (
            <div>
                <h2 title="PersonList src/components/Personnel/PersonList.js">Henkilöstö</h2>
                <input type="text" value={newPerson} onChange={handlePersonChange} />
                <button onClick={handleAddPerson}>Add</button>
                <div className="card-columns">
                    {personnel.map(person => <Person name={person.name} id={person.id} key={person.id} />)}
                </div>
            </div>
        )
    }

}

export default PersonList;