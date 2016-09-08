import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { AppContainer } from 'react-hot-loader';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
);


if (module.hot) {
   module.hot.accept('./App', () => {
       const ReplaceApp = require('./App').default;
       render(
           <AppContainer>
               <ReplaceApp />
           </AppContainer>,
           document.getElementById('root')
       );
   });
}
