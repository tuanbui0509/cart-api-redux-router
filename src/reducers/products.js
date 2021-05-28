import *as types from "../constants/ActionType";

let initialState = [];
let findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) result = index;
    });
    return result;
}
const products = (state = initialState, action) => {
    let index = -1;
    let { id } = action;
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return state;
        case types.DELETE_PRODUCTS:
            // return state.filter(el => el.id !== id);
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}



export default products