import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controlled from './Controlled';
import Uncontrolled from './Uncontrolled';

ReactDOM.render(
  <React.StrictMode>
    <Controlled />
  </React.StrictMode>,
  document.getElementById('controlled')
);

ReactDOM.render(
  <React.StrictMode>
    <Uncontrolled />
  </React.StrictMode>,
  document.getElementById('uncontrolled')
);
