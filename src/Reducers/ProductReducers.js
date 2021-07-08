import {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

} from "../Constants/ProductConstants";
export const ProductListReducers = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
// export const ProductDetailsReducers = (state = { product: {}, loading: true },
//     action) => {
//     switch (action.type) {
//         case PRODUCT_DETAILS_REQUEST:
//             return { loading: true };
//         case PRODUCT_DETAILS_SUCCESS:
//             console.log("product in reducers");
//             return { loading: false, product: action.payload };
//         case PRODUCT_DETAILS_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }

// }
export const productDetailsReducers = (state = { loading: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};