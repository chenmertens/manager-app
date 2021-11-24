import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './App';
import reportWebVitals from './reportWebVitals';
import FormBox from './FormBox';


ReactDOM.render(
  <React.StrictMode>
    <Calendar />
    <FormBox />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
