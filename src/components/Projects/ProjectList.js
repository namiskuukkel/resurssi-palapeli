
import React from 'react';
import Project from './Project'


class ProjectList extends React.Component {

    render() {
        const {projects, newProject, handleProjectChange, handleAddProject, selectProject} = this.props;
        
        return (
            <div>
                <h2 title="ProjectList src/components/Projects/ProjectList.js">Projektit</h2>
                <input type="text" value={newProject} onChange={handleProjectChange} />
                <button onClick={handleAddProject}>Add</button>
                <div className="card-columns">
                    {projects.map(project => <Project name={project.name} id={project.id} key={project.id} selectProject={selectProject}/>)}
                </div>
            </div>
        )
    }

}

export default ProjectList;