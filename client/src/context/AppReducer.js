export default (state, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
