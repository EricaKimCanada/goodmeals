const {
    MEAL_LIST_REQUEST,
    MEAL_LIST_SUCCESS,
    MEAL_LIST_FAIL,
    MEAL_DETAILS_REQUEST,
    MEAL_DETAILS_SUCCESS,
    MEAL_DETAILS_FAIL
} = require('../constants/mealConstants');

export const mealListReducer = (state = { loading: true, meals: [] }, action) => {
    switch (action.type) {
        case MEAL_LIST_REQUEST:
            return { loading: true };
        case MEAL_LIST_SUCCESS:
            return { loading: false, meals: action.payload };
        case MEAL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const mealDetailsReducer = (state = { meal: {}, loading: true }, action) => {
    switch (action.type) {
        case MEAL_DETAILS_REQUEST:
            return { loading: true };
        case MEAL_DETAILS_SUCCESS:
            return { loading: false, meal: action.payload };
        case MEAL_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
