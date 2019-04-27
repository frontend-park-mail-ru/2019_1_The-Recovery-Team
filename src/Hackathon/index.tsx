import * as React from 'libs/Cheburact';
import * as CheburactDOM from 'libs/CheburactDOM';
import userStore, { actionUserCheckAuth } from 'store/userStore';
require('styles/global.scss');

userStore.emit(actionUserCheckAuth());

CheburactDOM.render(<div>Hackathon</div>, document.getElementById('root'));
