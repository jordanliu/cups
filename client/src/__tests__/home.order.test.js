import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home/Home';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });
it('navigates order when order button clicked', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    const root = document.createElement('div');

    ReactDOM.render(
        <MemoryRouter initialEntries={['/']}>
            <Home />
        </MemoryRouter>,
        root
    );

    const button = shallow(<button id="order">ORDER</button>);

    button.find('#order').simulate('click');

    expect(location.pathname).toBe('/');
});
