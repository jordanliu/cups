export default (state, action) => {
    switch (action.type) {
        case 'GET_MENU':
            return {
                ...state,
                loading: false,
                menuItems: action.payload,
            };
        case 'DELETE_MENU':
            return {
                ...state,
                menuItems: state.menuItems.filter(
                    menuItem => menuItem.id !== action.payload
                ),
            };
        case 'ADD_ORDER':
            return {
                ...state,
                order: [action.payload, ...state.order],
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
