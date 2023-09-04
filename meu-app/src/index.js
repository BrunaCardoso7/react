import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import App2 from './components/App2';
import { App3 } from './components/App3';
import { App4 } from './components/App4';
import { App5 } from './components/App5';
import { Lista, Item } from './components/Lista';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lista>
        quero arro
        <Item key={999} id={999} completo={true}>lavar as louças</Item>
        <Item key={999} id={999} completo={false}>terminar curso de reat</Item>
        <Item key={999} id={999} completo={false}>voltar ao bootcamp</Item>
        <Item key={999} id={999} completo={true}>aula design ux/ui</Item>
    </Lista>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
