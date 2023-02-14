import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Provider store={store}>
    {
      console.log("environment variable"+process.env.PUBLIC_URL)
    }
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <PersistGate persistor={persistor}>
       <App />
    </PersistGate>,
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


