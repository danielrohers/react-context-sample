import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

const initialState = {
  todos: {}
};

const actions = {
  addTodo(text) {
    const todos = { ...this.state.todos };
    const todo = { id: Date.now(), text }
    todos[todo.id] = todo;
    this.setState({ todos });
  },

  removeTodo(id) {
    const todos = { ...this.state.todos };
    delete todos[id];
    this.setState({ todos });
  }
}

class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      addTodo: actions.addTodo.bind(this),
      removeTodo: actions.removeTodo.bind(this)
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export { Context, Consumer };