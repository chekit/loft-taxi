import { registerUserSuccess } from '../register';
import { logoutSuccess } from './actions';
import { isLoggedInReducer } from './reducers';

describe('LoggedIn Reducer', () => {
    it('should set LoggedIn property to true', () => {
        expect(isLoggedInReducer({}, registerUserSuccess())).toEqual(true);
    });

    it('should set LoggedIn property to false', () => {
        expect(isLoggedInReducer({}, logoutSuccess())).toEqual(false);
    });
});