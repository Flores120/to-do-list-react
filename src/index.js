import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var tasksList = [];

ReactDOM.render(<App tasks={tasksList}/>, document.getElementById('root'));
registerServiceWorker();
