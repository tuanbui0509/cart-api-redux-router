import callApi from '../utils/apiCaller'
import *as types from './../constants/ActionType'

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        callApi('product', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}
// call server
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCTS,
        id
    }
}