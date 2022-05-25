import React from 'react';  // Importamos React
import ReactDOM from 'react-dom'; // Importamos ReactDOM
import { Provider } from 'react-redux'
import App from './App'; // Importamos nuestro primer componente
import { store } from './store/store'

// insertamos nuestro componente en nuestro documento HTML utilizando ReactDOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
