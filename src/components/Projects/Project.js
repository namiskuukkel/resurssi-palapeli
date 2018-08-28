
import React from 'react';

class Project extends React.Component {

  handleClick = () => {
    console.log("clickety");
  };

  render() {
    const { id, name, requiredSkills, selectProject } = this.props;

    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body" onClick={selectProject} title="Project src/components/Projects/Project.js">
          {id}: {name}
        </div>
      </div>
    )
  }

}

export default Project;