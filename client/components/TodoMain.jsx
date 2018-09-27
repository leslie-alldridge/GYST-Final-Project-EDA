// external dependencies
import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import Paper from "@material-ui/core/Paper";
import uuid from "uuid";

//internal dependecies
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class TodoMain extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleClick(todo) {
    console.log(this.state);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          task: todo,
          checked: false
        }
      ]
    });
  }

  handleRemove(id) {
    console.log("removed");

    const finalTodos = this.state.todos.filter(todo => {
      if (todo.id != id) return todo;
    });
    this.setState({
      todos: finalTodos,
      open: true
    });
  }

  handleCheck(id) {
    console.log("checked");

    const finalTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    this.setState({
      todos: finalTodos
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Paper
        style={{
          paddingBottom: "20px",
          marginTop: 100,
          marginBottom: 100,
          marginRight: 20,
          marginLeft: 40
        }}
      >
        <div
          style={{
            display: "flex"
          }}
        >
          <div style={{ marginLeft: "44%" }}>
            <h1 style={{ textAlign: "center", color: "grey" }}>Todo List</h1>
          </div>
          <div style={{ marginRight: "10%", marginTop: 13 }}>
            <IconButton />
          </div>
        </div>

        <TodoList
          todos={this.state.todos}
          handleRemove={this.handleRemove}
          handleCheck={this.handleCheck}
        />
        <br />
        <div style={{ marginLeft: "5%" }}>
          <AddTodo handleClick={this.handleClick} />
        </div>
        <Snackbar
          open={this.state.open}
          message="Todo Item deleted"
          autoHideDuration={2000}
          onClose={this.handleRequestClose}
        />
      </Paper>
    );
  }
}

export default TodoMain;