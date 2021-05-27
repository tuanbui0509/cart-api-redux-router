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