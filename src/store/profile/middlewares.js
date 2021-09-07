import { updateProfileSuccess } from '.';
import { LocalStorageService, StorageKeys } from '../../services';
import { ProfileActionTypes } from './actions';

export const profileMiddleware = store => next => action => {
    const localStorageService = new LocalStorageService();

    if (action.type === ProfileActionTypes.UPDATE_PROFILE) {
        const { name, card, exp, cvc } = action.payload;
        localStorageService.save(StorageKeys.PROFILE_DATA, { name, card, exp, cvc });

        setTimeout(() => {
            store.dispatch(updateProfileSuccess({ name, card, exp, cvc }));
        }, 0);
    }

    next(action);
}