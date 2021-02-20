import Axios from 'axios';
import {
    MEAL_LIST_FAIL,
    MEAL_LIST_REQUEST,
    MEAL_LIST_SUCCESS,
    MEAL_DETAILS_REQUEST,
    MEAL_DETAILS_SUCCESS,
    MEAL_DETAILS_FAIL
} from '../constants/mealConstants';

export const listMeals = () => async (dispatch) => {
    dispatch({
        type: MEAL_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/meals');
        dispatch({ type: MEAL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: MEAL_LIST_FAIL, payload: error.message });
    }
};

export const detailsMeal = (mealId) => async (dispatch) => {
    dispatch({
        type: MEAL_DETAILS_REQUEST, payload: mealId
    });
    try {
        const { data } = await Axios.get(`/api/meals/${mealId}`);
        dispatch({ type: MEAL_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: MEAL_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
};