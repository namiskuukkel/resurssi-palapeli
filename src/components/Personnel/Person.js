
import React from 'react';

class Person extends React.Component {

  render() {
  
    const {id, name, skills} = this.props;

    return (
      <div>
        <li key={id}>{name}</li>
      </div>
    )
  }

}

export default Person;