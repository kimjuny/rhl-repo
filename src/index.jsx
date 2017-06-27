import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes/index.jsx';

const main = document.createElement('div');
main.id = 'main';
document.body.appendChild(main);

const doRender = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
  , main);
}

doRender(Routes);

if(module.hot) {
  module.hot.accept('./routes/index.jsx', () => {
    doRender(Routes);
  });
}