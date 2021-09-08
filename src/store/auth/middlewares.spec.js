import { authMiddleware } from './middlewares';
import { authUserRequest, AuthActionTypes } from './actions';
import { AuthService, LocalStorageService, StorageKeys } from './../../services';

const TEST_DATA = { email: 'test', password: 'pass' };
const TEST_DATA_ERROR_TEXT = 'Error Authenticate';

describe('Auth Middleware', () => {
    describe('#AUTHORIZE', () => {
        it('should authenticate', async () => {
            const dispatch = jest.fn();
            const next = jest.fn();
            const login = jest.spyOn(AuthService.prototype, 'login').mockReturnValue(Promise.resolve({ success: true }));
            const saveToStorage = jest.spyOn(LocalStorageService.prototype, 'save');

            await authMiddleware({ dispatch })(next)(authUserRequest(TEST_DATA));

            expect(login).toHaveBeenCalledWith(TEST_DATA);
            expect(saveToStorage).toHaveBeenCalledWith(StorageKeys.LOGIN_DATA, TEST_DATA);
            expect(dispatch).toHaveBeenCalledWith({
                type: AuthActionTypes.AUTHORIZE_SUCCESS,
                payload: TEST_DATA
            });
        });

        it('should dispatch error', async () => {
            const dispatch = jest.fn();
            const next = jest.fn();
            const login = jest.spyOn(AuthService.prototype, 'login').mockReturnValue(Promise.resolve({ success: false, error: TEST_DATA_ERROR_TEXT }));
            const saveToStorage = jest.spyOn(LocalStorageService.prototype, 'save');

            await authMiddleware({ dispatch })(next)(authUserRequest(TEST_DATA));

            expect(login).toHaveBeenCalledWith(TEST_DATA);
            expect(saveToStorage).not.toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledWith({
                type: AuthActionTypes.AUTHORIZE_FAILURE,
                payload: TEST_DATA_ERROR_TEXT
            });
        });
    })
});