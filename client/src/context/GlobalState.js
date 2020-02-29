import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    menuItems: [
        {
            id: 1,
            title: 'Coffee',
            description: 'yummy',
            image:
                'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg?w=1155&h=1541',
            price: 550.5,
        },
        {
            id: 2,
            title: 'Tea',
            description: 'yummy',
            image:
                'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg?w=1155&h=1541',
            price: 800,
        },
        {
            id: 3,
            title: 'Water',
            description: 'yummy',
            image:
                'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg?w=1155&h=1541',
            price: 50.5,
        },
        {
            id: 4,
            title: 'Food',
            description: 'yummy',
            image:
                'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg?w=1155&h=1541',
            price: 330,
        },
    ],
};

//Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteMenu(id) {
        dispatch({
            type: 'DELETE_MENU',
            payload: id,
        });
    }
    return (
        <GlobalContext.Provider
            value={{ menuItems: state.menuItems, deleteMenu }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
