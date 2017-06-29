import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: [],
      notes: []
    };
    this.showTitle = this.showTitle.bind(this);
    this.showNotes = this.showNotes.bind(this);
  }
  showTitle(event) {
    this.setState({
      title: event.target.value
    });
  }
  showNotes(event) {
    this.setState({
      notes: event.target.value
    });
  }
    addTask(event) {
      event.preventDefault();
      var titleArray = [];
      var notesArray = [];
      titleArray.push(this.state.title);
      notesArray.push(this.state.notes);

      this.setState({
        title: titleArray,
        notes: notesArray
      });
  }
  show() {
    const title = this.state.title.map((title, i) => {
      return (
      <div key={title}>
        {title}
        <div>
        )
      );
    }
  }
  render() {
    return (
      <div>
        <div className="inputTask">
        <h1><b>To Do List</b></h1>
          <form>
            <h3>Title</h3>
            <input id="title" onChange={this.showTitle} placeholder="Title for task"/>
            <br></br>
            <h3>Notes</h3>
            <textarea id="notes" onChange={this.showNotes} placeholder="Insert notes here"></textarea>
            <button onClick={this.addTask.bind(this)} id="submit"><b>SUBMIT</b></button>
          </form>
          </div>
        <div id="preview">
          <h2>{this.state.title}</h2>
          <p>{this.state.notes}</p>
        </div>
        <h1>{this.addTask}</h1>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-container">
        <ToDoList/>
        </div>
      </div>
    );
  }
}

export default App;
