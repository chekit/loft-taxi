import { logoutRequest } from '../logout';
import { registerUserSuccess } from '../register';
import { isLoggedInReducer } from './reducers';

describe('LoggedIn Reducer', () => {
    it('should set LoggedIn property to true', () => {
        expect(isLoggedInReducer({}, registerUserSuccess())).toEqual(true);
    });

    it('should set LoggedIn property to false', () => {
        expect(isLoggedInReducer({}, logoutRequest())).toEqual(false);
    });
});