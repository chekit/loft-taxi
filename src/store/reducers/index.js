import { ActionTypes } from '../actions';

const initialState = {
    userData: null,
    profileData: null,
    isError: null,
    isLoading: false
};

export default function loftTaxi(state = initialState, action) {
    switch (action.type) {
        // Auth
        case ActionTypes.AUTHORIZE:
            return {
                ...state,
                userData: { ...action.payload },
                isError: null,
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
                ...state,
                isError: null,
                isLoading: true
            };

        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                userData: { ...action.payload },
                isLoading: false
            };
        // Update
        // @TODO: Refactor
        case ActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                profileData: { ...action.payload },
                isLoading: true
            };

        case ActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false
            };


        // @TODO: Refactor
        case ActionTypes.AUTHORIZE_FAILURE:
        case ActionTypes.REGISTER_FAILURE:
        case ActionTypes.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                userData: null,
                profileData: null,
                isError: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
}