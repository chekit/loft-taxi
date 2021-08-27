import { ActionTypes } from '../actions';

const initialState = {};

export default function loftTaxi(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.AUTHORIZE:
            return {
                ...state,
                userData: {
                    login: action.payload.login,
                    password: action.payload.password
                }
            }
        default:
            return state;
    }
}