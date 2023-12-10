import App from './App.js';
import { storageGetItem } from './storage';

const initialState = storageGetItem('todos', '');

const $app = document.querySelector('.app');

App({
  $target: $app as any,
  initialState,
});
