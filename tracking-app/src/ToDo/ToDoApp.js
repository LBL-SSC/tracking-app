import React from 'react';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class ToDoApp extends React.Component {
  
  state = {
    todos: []
  };

  componentDidMount = () => {
    const localToDos = JSON.parse(localStorage.getItem("todoList"));
    this.setState({
      todos: localToDos || []
    });
  };

  handleSubmit = (e, newTask) => {
    e.preventDefault();
    let taskShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    const newToDoList = [...this.state.todos, taskShape];

    this.setState({
      todos: newToDoList
    });
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
  };

  toggleCompleted = id => {
    const toDoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: toDoById
    });
    localStorage.setItem("todoList", JSON.stringify(toDoById));
  };

  clearCompleted = () => {
    const completed = this.state.todos.filter(todo => {
      return todo.completed === false;
    });
    this.setState({
      todos: completed
    });
    localStorage.setItem("todoList", JSON.stringify(completed));
  };

  render() {
    if (!this.state.todos) return <h1>loading to dos... </h1>;
    return (
      <div>
        <h1>Website ToDo List</h1>
        <ToDoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default ToDoApp;