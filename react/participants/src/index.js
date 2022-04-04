import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Participants} from "./Participants";
import reportWebVitals from './reportWebVitals';
import {participantsData} from "./data/participants";

ReactDOM.render(
  <React.StrictMode>
    <Participants list={participantsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
