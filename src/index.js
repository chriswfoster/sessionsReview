import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//new redux imports here:
import store from './store'
import {Provider} from 'react-redux' //using react-redux, not just redux

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
    document.getElementById('root')
) //Provider needs to be accessible to App, as well as Router.
// Wrap Router AND App inside of Provider.


registerServiceWorker();
