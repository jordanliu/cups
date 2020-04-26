import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('app renders without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
});
