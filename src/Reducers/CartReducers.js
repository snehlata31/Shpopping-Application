import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/CartConstants";
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log("NEWitem", item)
            const existItem = state.cartItems.find((x) => x.product === item.product);
            console.log("exiItem", existItem);
            if (existItem) {
                console.log("inside existing");
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        default:
            return state;
    }
};

