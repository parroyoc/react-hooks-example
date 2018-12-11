import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContentContext from './utils/ContentContext';
import * as serviceWorker from './serviceWorker';
import './index.css';


const messages = {
  summaryTitle: 'Summary:',
  summaryRecipient: 'Recipient:',
  basketTitle: 'Basket'
};

ReactDOM.render(
  <ContentContext.Provider value={messages}>
    <App />
  </ContentContext.Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
