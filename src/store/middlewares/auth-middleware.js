import { ActionTypes, authUserSuccess } from '../actions'

export const authMiddleware = store => next => action => {
    if (action.type === ActionTypes.AUTHORIZE) {
        setTimeout(() => {
            store.dispatch(authUserSuccess(action.payload));
        }, 2000);
    }

    next(action);
}