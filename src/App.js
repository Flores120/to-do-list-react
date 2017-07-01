import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddNewTask extends Component {
  constructor(props) {
    super();
    this.state = {
      mycurrentTask: ""
    }
    this.justSubmitted = this.justSubmitted.bind(this);
    this.currentTask = this.currentTask.bind(this);
  }
  currentTask(e) {
    this.setState({
      mycurrentTask: e.target.value
    });
  }
  justSubmitted(e) {
    e.preventDefault();

    var input = e.target.querySelector('input');
    var value = input.value;
    input.value = " ";
    this.props.updateList(value);
  }
  render() {
    return (
      <div>
      <div className="inputTask">
      <form onSubmit={this.justSubmitted}>
      <input placeholder="Clean the bathroom." id="title" onChange={this.currentTask}type="text" />
      <button id="submit">+ add task</button>
      </form>
      </div>
      <div id="preview">
      <div id="preview-content">
      <i>Your Task:</i> {this.state.mycurrentTask}
      </div>
      </div>
      </div>
    );
  }
}
class ToAppList extends Component {
  constructor(props) {
    super();
    this.remove = this.remove.bind(this);
  }
  remove(elem) {
    var value = elem.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }
  render() {
    var items = this.props.tasks.map((elem, i ) => {
      return <li id="tasks" key={i}><span>{elem}</span><button id="delete" onClick={this.remove}>- delete</button></li>
    });
    return (
      <div className="tasks">
      <ul id="tasksUl">
      {items}
      </ul>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
    this.removeTasks = this.removeTasks.bind(this);
  }
  updateList(text) {
    var updatedTask = this.state.tasks;
    updatedTask.push(text);
    this.setState({
      tasks: updatedTask
    });
  }
  removeTasks(text){
    var updatedTask = this.state.tasks;
    updatedTask.splice(updatedTask.indexOf(text), 1);
    this.setState({
      tasks: updatedTask
  });
}
  render() {
    return (
      <div className="container">
        <div className="content-container">
        <div id="appTitle">
        To Do App
        </div>
        <AddNewTask updateList={this.updateList}/>
        <ToAppList tasks={this.state.tasks} remove={this.removeTasks}/>
        </div>
      </div>
    );
  }
}

export default App;
