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
            };

        case ActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                profileData: {
                    name: action.payload.login,
                    card: action.payload.card,
                    exp: action.payload.exp,
                    cvc: action.payload.cvc
                }
            };
        default:
            return state;
    }
}