import React, { Component } from 'react';

class taskItem extends Component {
  deletetask(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="task">
          <strong>{this.props.task.title}</strong>: {this.props.task.category} <a href="#" onClick={this.deletetask.bind(this, this.props.task.id)}>X</a>
      </li>
    );
  }
}

taskItem.propTypes = {
  task: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default taskItem;
