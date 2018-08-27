
import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      name: props.name,
      skills: []
    }
  }

  render() {
    return (
      <div>
        <li key={this.state.id}>{this.state.name}</li>
      </div>
    )
  }

}

export default Person;