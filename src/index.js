import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-21543155-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);