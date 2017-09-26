import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Tasks extends Component {
  deleteTask(id){
    this.props.onDelete(id);
  }

  render() {
    let taskItems;
    if(this.props.tasks){
      taskItems = this.props.tasks.map(task => {
        //console.log(task);
        return (
          <TaskItem onDelete={this.deleteTask.bind(this)} key={task.title} task={task} />
        );
      });
    }
    return (
      <div className="Tasks">
          <h3>Latest Tasks</h3>
          {taskItems}
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Tasks;
