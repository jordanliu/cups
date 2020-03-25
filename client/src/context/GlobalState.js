import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    menuItems: [],
    customers: [],
    order: [],
    orderItems: [],
    error: null,
    loading: true,
};

//Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    async function getCustomers() {
        try {
            const res = await axios
                .get('/api/auth/')
                .catch(error => console.log(error.message));

            dispatch({
                type: 'GET_CUSTOMER',
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: 'MENU_ERROR',
                payload: err.response,
            });
        }
    }

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

    async function deleteMenuItem(id) {
        try {
            await axios.delete(`/api/item/${id}`);

            dispatch({
                type: 'DELETE_MENU',
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response,
            });
        }
    }

    async function editMenuItem(id, menuItem) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios
                .patch(`/api/item/${id}`, menuItem, config)
                .catch(error => console.log(error.message));

            dispatch({
                type: 'EDIT_MENU',
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

    async function getOrderItems() {
        try {
            const res = await axios
                .get('/api/order')
                .catch(error => console.log(error.message));

            dispatch({
                type: 'GET_ORDER_ITEMS',
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response,
            });
        }
    }

    function addOrder(order) {
        dispatch({
            type: 'ADD_ORDER',
            payload: order,
        });
    }

    function deleteOrder(order) {
        dispatch({
            type: 'DELETE_ORDER',
            payload: order,
        });
    }

    async function addOrderItems(orderItem) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const res = await axios
                .post('/api/order', orderItem, config)
                .catch(error => console.log(error.message));

            dispatch({
                type: 'ADD_ORDER_ITEMS',
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                menuItems: state.menuItems,
                customers: state.customers,
                orderItems: state.orderItems,
                order: state.order,
                error: state.error,
                loading: state.loading,
                getMenuItems,
                addMenuItem,
                editMenuItem,
                getCustomers,
                getOrderItems,
                addOrder,
                deleteOrder,
                addOrderItems,
                deleteMenuItem,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
