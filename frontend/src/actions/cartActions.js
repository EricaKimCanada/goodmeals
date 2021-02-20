import Axios from 'axios';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_CREDITCARD_INFO,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_DELIVERY_METHOD,
} from '../constants/cartConstants';

export const addToCart = (mealId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/meals/${mealId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            meal: data._id,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (mealId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: mealId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const saveCreditCardInfo = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_CREDITCARD_INFO, payload: data });
    localStorage.setItem('creditCardInfo', JSON.stringify(data));
};

export const saveDeliveryMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_DELIVERY_METHOD, payload: data });
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};

