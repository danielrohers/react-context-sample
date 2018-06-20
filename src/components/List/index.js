import React from 'react';

import './index.css';

import { Consumer } from '../../Context';

import { Button } from '../Button';
import { ListItem } from '../ListItem';

export const List = () => {

  const _item = (todo, removeTodo) => (
    <ListItem key={todo.id} className="List-item">
      {todo.text}
      <Button onClick={() => removeTodo(todo.id)}>x</Button>
    </ListItem>
  );

  return (
    <Consumer>
      {
        ({ todos, removeTodo }) => (
          <ul className="List">{ Object.values(todos).map(todo => _item(todo, removeTodo)) }</ul>
        )
      }
    </Consumer>
  )
}