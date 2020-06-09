
import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './com/main';


ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


if (module.hot) {
    module.hot.accept()
}



