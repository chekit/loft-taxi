export const ActionTypes = {
    AUTHORIZE: '[App] Authorize user',
    UPDATE_PROFILE: '[App] Update profile'
};

export const authUser = (payload) => {
    return {
        type: ActionTypes.AUTHORIZE,
        payload
    };
};

export const updateProfile = (payload) => {
    return {
        type: ActionTypes.UPDATE_PROFILE,
        payload
    };
};