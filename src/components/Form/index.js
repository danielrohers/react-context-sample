import React from 'react';

import { Consumer } from '../../Context';

import { Input } from '../Input';

export const Form = () => {

  function _onSubmit(e, addTodo) {
    e.preventDefault();
    const form = e.target;
    addTodo(form.text.value);
    form.reset();
  }

  return (
    <Consumer>
      {
        ({ addTodo }) => (
          <form onSubmit={e => _onSubmit(e, addTodo)}>
            <Input name="text" />
          </form>
        )
      }
    </Consumer>
  )
}