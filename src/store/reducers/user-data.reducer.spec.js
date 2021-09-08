import { authUserSuccess } from '../auth';
import { logoutRequest } from '../logout';
import { userDataReducer } from './user-data.reducer';

const USER_DATA = { email: 'test@test.com', password: '000' };

describe('User Data Reducer', () => {
    it('should set user data inside store', () => {
        expect(userDataReducer({}, authUserSuccess(USER_DATA))).toEqual(USER_DATA);
    });

    it('should reset usr data inside store', () => {
        expect(userDataReducer({}, logoutRequest())).toEqual(null);
    });
});