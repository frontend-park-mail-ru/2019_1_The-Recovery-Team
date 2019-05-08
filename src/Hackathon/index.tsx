import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';
import userStore, { actionUserCheckAuth } from 'store/userStore';
import Chat from './Chat';

require('styles/global.scss');

userStore.emit(actionUserCheckAuth());

CheburactDOM.render(<Chat />, document.getElementById('root'));
