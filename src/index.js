import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {arrayMove} from 'react-sortable-hoc'
import './index.css';
import App from './App';
import {ITEM_MOVED} from './actions'

// Reducer responsible only for list of items.
const itemsReducer = (state = { items: ['Item 1', 'Item 2', 'Item 3'] }, action) => {
  switch (action.type) {
    case ITEM_MOVED:
      return {items: arrayMove(state.items, action.payload.oldIndex, action.payload.newIndex)}
  }
  return state
}

const store = createStore(itemsReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
