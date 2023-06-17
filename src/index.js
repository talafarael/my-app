import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Headers from './Componets/Header/Index'
import reportWebVitals from './reportWebVitals';
import Input from './Componets/Input/Index'
import List from './Componets/List/Index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App >
      <Headers/>
      <Input/>
      <List/>
    </App>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
