
import React from 'react';
import Person from './Person';
import { createNew } from './../../reducers/personReducer';
import { connect } from 'react-redux';

class PersonList extends React.Component {

    addPerson = (event) => {

        event.preventDefault();

        const content = event.target.name.value;
        event.target.name.value = ''
        this.props.createNew(content);
    };

    render() {
        const { personnel, newPerson, handlePersonChange, handleAddPerson } = this.props;
        return (
            <div>
                <h2 title="PersonList src/components/Personnel/PersonList.js">Henkilöstö</h2>
                <form onSubmit={this.addPerson}>
                    <input name="name" />
                    <button>Lisää resurssi</button>
                </form>
                <div className="card-columns">
                    {personnel.map(person => <Person name={person.name} id={person.id} key={person.id} />)}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        personnel: state.personnel
    }
}

export default connect(
    mapStateToProps,
    { createNew }
)(PersonList)