export const ActionTypes = {
    AUTHORIZE: '[App] Authorize user'
};

export const authUser = (payload) => {
    return {
        type: ActionTypes.AUTHORIZE,
        payload
    };
};