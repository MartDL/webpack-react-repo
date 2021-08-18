import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'React-Webpack Boilerplate repo';
console.log('here')

ReactDOM.render(
    <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();