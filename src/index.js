import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import townsstate from './reducers';
import App from './App';

import './index.css';

const store = createStore(townsstate);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);







// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
