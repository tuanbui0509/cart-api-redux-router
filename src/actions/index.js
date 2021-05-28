import callApi from '../utils/apiCaller'
import *as types from './../constants/ActionType'
// fetch all product
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
// delete product
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(res.data.id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCTS,
        id
    }
}

// add product

export const actAddProductRequest = product => {
    return dispatch => {
        return callApi('product', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = product => {
    return {
        type: types.ADD_PRODUCTS,
        product
    }
}

export const actUpdateProductRequest = product => {
    return dispatch => {
        return callApi(`product/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = product => {
    return {
        type: types.UPDATE_PRODUCTS,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = product => {
    return {
        type: types.EDIT_PRODUCTS,
        product
    }
}