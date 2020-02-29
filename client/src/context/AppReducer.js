export default (state, action) => {
    switch (action.type) {
        case 'DELETE_MENU':
            return {
                ...state,
                menuItems: state.menuItems.filter(
                    menuItem => menuItem.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
