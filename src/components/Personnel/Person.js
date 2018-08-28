
import React from 'react';

class Person extends React.Component {

  render() {

    const { id, name, skills } = this.props;

    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body" title="Project src/components/Projects/Person.js">
          {id}: {name}
        </div>
      </div>
    )
  }

}

export default Person;