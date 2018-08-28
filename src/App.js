//ES6 moduuleja
import React from 'react';
import './App.css';
import PersonList from './components/Personnel/PersonList'
import ProjectList from './components/Projects/ProjectList'

let personId = 0;
let projectId = 0;

class App extends React.Component {
  constructor(props) {
    super(props)
    //State säilytetään mahdollisimman korkealla tasolla
    //Alikomponentit saavat tilatietoja props-objektissa parametreina välitettynä
    this.state = {
      personnel: [],
      projects: [],
      skills: [],
      newPerson: '',
      newProject: ''
    }
  }

  handlePersonChange = (event) => {

    this.setState({ newPerson: event.target.value });
  };

  handleAddProject = (event) => {

    event.preventDefault();
    console.log(newProject);
    const newProject = { name: this.state.newProject, id: projectId++ };
    this.setState({ projects: this.state.projects.concat(newProject) });
    this.setState({ newProject: '' });
  };

  handleProjectChange = (event) => {

    this.setState({ newProject: event.target.value });
  };

  selectProject = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <PersonList personnel={this.state.personnel} newPerson={this.state.newPerson} handleAddPerson={this.handleAddPerson} handlePersonChange={this.handlePersonChange} />
          <ProjectList projects={this.state.projects} newProject={this.state.newProject} handleAddProject={this.handleAddProject} handleProjectChange={this.handleProjectChange} />
        </div>
      </div>
    );
  }
}

export default App;
