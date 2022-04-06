import React from 'react';
import ReactDOM from 'react-dom';

import { FirebaseAppProvider } from 'reactfire';
import reportWebVitals from './reportWebVitals';
import App from './components/Unknown/App';
import firebaseConfig from './common/firebaseConfig';
import firebaseApp from './common/firebaseApp';

ReactDOM.render(
  <FirebaseAppProvider
    firebaseConfig={firebaseConfig}
    firebaseApp={firebaseApp}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
