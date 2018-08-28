
import React from 'react';
import Project from './Project';
import { createNew } from './../../reducers/projectReducer';
import { connect } from 'react-redux';


class ProjectList extends React.Component {

    addProject = (event) => {

        event.preventDefault();

        const content = event.target.name.value;
        event.target.name.value = ''
        this.props.createNew(content);
    };

    render() {
        const {projects, newProject, handleProjectChange, handleAddProject, selectProject} = this.props;
        
        return (
            <div>
                <h2 title="ProjectList src/components/Projects/ProjectList.js">Projektit</h2>
                <form onSubmit={this.addProject}>
                <input type="text" name="name" />
                <button>Lisää projekti</button>
                </form>
                <div className="card-columns">
                    {projects.map(project => <Project name={project.name} id={project.id} key={project.id} selectProject={selectProject}/>)}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(
    mapStateToProps,
    { createNew }
)(ProjectList);