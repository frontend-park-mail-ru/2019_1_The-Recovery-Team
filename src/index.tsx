import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';
import App from './App';
import Requester from 'libs/Requester/Requester';
import API from 'config/API';
require('./styles/global.scss');


CheburactDOM.render(
    <App />,
    document.getElementById('root'),
);

Requester.get(API.scores() + 'ddd', {
  limit: 2,
  start: 0
}).then(({ response, error }) => {
  console.log('result', response, error);
});
