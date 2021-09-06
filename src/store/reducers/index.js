import { ActionTypes } from '../actions';

const initialState = {
    userData: null,
    profileData: null,
    isError: false,
    isLoading: false
};

export default function loftTaxi(state = initialState, action) {
    switch (action.type) {
        // Auth
        case ActionTypes.AUTHORIZE:
            return {
                ...state,
                userData: { ...action.payload },
                isLoading: true
            };

        case ActionTypes.AUTHORIZE_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        // Register
        // @TODO: Refactor
        case ActionTypes.REGISTER:
            return {
                ...state
            };

        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                userData: { ...action.payload }
            };
        // Update
        // @TODO: Refactor
        case ActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                profileData: { ...action.payload }
            };

        case ActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
            };


        // @TODO: Refactor
        case ActionTypes.AUTHORIZE_FAILURE:
        case ActionTypes.REGISTER_FAILURE:
        case ActionTypes.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                userData: null,
                profileData: null,
                isError: true
            };

        default:
            return state;
    }
}