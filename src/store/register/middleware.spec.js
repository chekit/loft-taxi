import { registerMiddleware } from './middlewares';
import { registerUserRequest, RegisterActionTypes } from './actions';
import { AuthService, LocalStorageService, StorageKeys } from '../../services';

const TEST_DATA = { email: 'test', password: 'pass', name: 'Test', surname: 'Testing' };
const TEST_DATA_ERROR_TEXT = 'Error register';

describe('Register Middleware', () => {
    describe('#REGISTER', () => {
        it('should authenticate', async () => {
            const dispatch = jest.fn();
            const next = jest.fn();
            const register = jest.spyOn(AuthService.prototype, 'register').mockReturnValue(Promise.resolve({ success: true }));
            const saveToStorage = jest.spyOn(LocalStorageService.prototype, 'save');

            await registerMiddleware({ dispatch })(next)(registerUserRequest(TEST_DATA));

            expect(register).toHaveBeenCalledWith(TEST_DATA);
            expect(saveToStorage).toHaveBeenCalledWith(StorageKeys.LOGIN_DATA, { email: TEST_DATA.email, password: TEST_DATA.password });
            expect(dispatch).toHaveBeenCalledWith({
                type: RegisterActionTypes.REGISTER_SUCCESS,
                payload: TEST_DATA
            });
        });

        it('should dispatch error', async () => {
            const dispatch = jest.fn();
            const next = jest.fn();
            const login = jest.spyOn(AuthService.prototype, 'register').mockReturnValue(Promise.resolve({ success: false, error: TEST_DATA_ERROR_TEXT }));
            const saveToStorage = jest.spyOn(LocalStorageService.prototype, 'save');

            await registerMiddleware({ dispatch })(next)(registerUserRequest(TEST_DATA));

            expect(login).toHaveBeenCalledWith(TEST_DATA);
            expect(saveToStorage).not.toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledWith({
                type: RegisterActionTypes.REGISTER_FAILURE,
                payload: TEST_DATA_ERROR_TEXT
            });
        });
    })
});