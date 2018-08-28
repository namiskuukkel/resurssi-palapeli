
import React from 'react';

class Project extends React.Component {

  handleClick = () => {
    console.log("clickety");
  };

  render() {
    const {id, name, requiredSkills, selectProject} = this.props;

    return (
      <div>
        <li key={id} onClick={selectProject}>{name}</li>
      </div>
    )
  }

}

export default Project;