import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    menuItems: [],
    order: [],
    error: null,
    loading: true,
};

//Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    async function getMenuItems() {
        try {
            const res = await axios
                .get('/api/item')
                .catch(error => console.log(error.message));

            dispatch({
                type: 'GET_MENU',
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: 'MENU_ERROR',
                payload: err.response,
            });
        }
    }

    async function addMenuItem(menuItem) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios
                .post('/api/item', menuItem, config)
                .catch(error => console.log(error.message));

            dispatch({
                type: 'ADD_MENU',
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: 'MENU_ERROR',
                payload: err.response,
            });
        }
    }

    function deleteMenu(id) {
        dispatch({
            type: 'DELETE_MENU',
            payload: id,
        });
    }

    function addOrder(order) {
        dispatch({
            type: 'ADD_ORDER',
            payload: order,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                menuItems: state.menuItems,
                orderItems: state.orderItems,
                order: state.order,
                error: state.error,
                loading: state.loading,
                getMenuItems,
                addMenuItem,
                addOrder,
                deleteMenu,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
