import rootReducer from './reducer';
import { authUserFailure, authUserRequest, authUserSuccess } from './auth';
import { logoutRequest, logoutSuccess } from './logout';
import { updateProfileSuccess } from './profile';

const PROFILE_DATA = {
    name: 'Bob Marley',
    card: '4204 2042 0420 4200',
    exp: '08/26',
    cvc: '000'
};

const USER_DATA = {
    email: 'test@test.com',
    password: '000'
};

const ERROR_MESSAGE = 'Error Message';

const initialState = {
    userData: null,
    profileData: null,
    error: null,
    isLoading: false,
    isLoggedIn: false,
    addressList: [],
    currentRoute: [],
};

describe('Root Reducer', () => {
    it('should update User Data and LoggedIn inside store', () => {
        expect(rootReducer(initialState, authUserSuccess(USER_DATA))).toEqual({ ...initialState, userData: USER_DATA, isLoggedIn: true });
    });

    it('should update Profile Data inside store', () => {
        expect(rootReducer(initialState, updateProfileSuccess(PROFILE_DATA))).toEqual({ ...initialState, profileData: PROFILE_DATA });
    });

    it('should update IsLoading inside store', () => {
        expect(rootReducer(initialState, authUserRequest(USER_DATA))).toEqual({ ...initialState, isLoading: true });
    });

    it('should update Error message inside store', () => {
        expect(rootReducer(initialState, authUserFailure(ERROR_MESSAGE))).toEqual({ ...initialState, error: ERROR_MESSAGE });
    });

    it('should update LogIn adn LogOut message inside store', () => {
        const expected = { ...initialState, userData: USER_DATA, isLoggedIn: true };
        expect(rootReducer(initialState, authUserSuccess(USER_DATA))).toEqual(expected);
        expect(rootReducer(expected, logoutSuccess())).toEqual({ ...expected, userData: null, isLoggedIn: false });
    });
});