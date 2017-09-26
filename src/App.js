import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
    }
  }


  getTasks(){
    this.setState({tasks: [
      {
        id:uuid.v4(),
        title: 'Drawing',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Editing',
        category: 'Design'
      },
      {
        id:uuid.v4(),
        title: 'Review',
        category: 'Web Development'
      }
    ]});
  }

  componentWillMount(){
    this.getTasks();
  }

  componentDidMount(){
  }

  handleAddTask(project){
    let tasks = this.state.tasks;
    tasks.push(project);
    this.setState({tasks:tasks});
  }

  handleDeleteTask(id){
    let tasks = this.state.tasks;
    let index = tasks.findIndex(x => x.id === id);
    tasks.splice(index, 1);
    this.setState({tasks:tasks});
  }

  render() {
    return (
      <div className="App">
          <AddTask addTask={this.handleAddTask.bind(this)} />
          <Tasks tasks={this.state.tasks} onDelete={this.handleDeleteTask.bind(this)} />
          <hr />
      </div>
    );
  }
}

export default App;
