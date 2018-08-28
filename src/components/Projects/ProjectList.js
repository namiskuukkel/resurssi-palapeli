
import React from 'react';
import Project from './Project'


class ProjectList extends React.Component {

    render() {
        const {projects, newProject, handleProjectChange, handleAddProject, selectProject} = this.props;
        
        return (
            <div>
                <h2>Morde</h2>
                <input type="text" value={newProject} onChange={handleProjectChange} />
                <button onClick={handleAddProject}>Add</button>
                <ul>
                    {projects.map(project => <Project name={project.name} key={project.id} selectProject={selectProject}/>)}
                </ul>
            </div>
        )
    }

}

export default ProjectList;