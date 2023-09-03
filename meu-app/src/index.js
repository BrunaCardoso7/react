import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import App2 from './components/App2';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 title="Components dinâmicos com React">
        As props (abreviação de propriedades) em React são uma maneira de passar
        dados de um componente pai para um componente filho. As props são essenciais para
        a construção de componentes reutilizáveis e para a comunicação eficaz entre 
        componentes em uma aplicação React. Aqui estão as principais finalidades e vantagens 
        das props em React
    </App2>
    <App2 title="Conclusão">
        Desse modo criamos components de facil manutenção e padronizados
    </App2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
