export default (state, action) => {
    switch (action.type) {
        case 'GET_MENU':
            return {
                ...state,
                loading: false,
                menuItems: action.payload,
            };
        case 'ADD_MENU':
            return {
                ...state,
                menuItems: [...state.menuItems, action.payload],
            };
        case 'EDIT_MENU':
            return {
                ...state,
                menuItems: state.menuItems.map(menuItems => {
                    if (menuItems._id === action.payload._id) {
                        return action.payload;
                    }
                    return menuItems;
                }),
            };
        case 'DELETE_MENU':
            return {
                ...state,
                menuItems: state.menuItems.filter(
                    menuItems => menuItems._id !== action.payload
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
