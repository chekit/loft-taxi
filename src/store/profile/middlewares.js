import { getProfileFailure, getProfileSuccess, updateProfileFailure, updateProfileSuccess } from '.';
import { ProfileService } from '../../services';
import { ProfileActionTypes } from './actions';

export const profileMiddleware = store => next => async action => {
    const profileService = new ProfileService();

    if (action.type === ProfileActionTypes.UPDATE_PROFILE) {
        const { cardNumber, cardName, expiryDate, cvc } = action.payload;
        const { userData: { token } } = store.getState();

        profileService.saveCardData({ cardNumber, expiryDate, cardName, cvc, token })
            .then(({ success, error }) => {
                if (success) {
                    store.dispatch(updateProfileSuccess({ cardNumber, expiryDate, cardName, cvc }));
                }

                if (error) {
                    store.dispatch(updateProfileFailure(error));
                }
            });
    }

    if (action.type === ProfileActionTypes.GET_PROFILE) {
        const { userData: { token } } = store.getState();

        profileService.getCardData(token)
            .then(({ success, error, ...data }) => {
                if (data) {
                    store.dispatch(getProfileSuccess(data));
                }

                if (!success && error) {
                    store.dispatch(getProfileFailure(error));
                }
            });
    }

    next(action);
}