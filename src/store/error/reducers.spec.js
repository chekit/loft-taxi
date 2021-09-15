import { errorReducer } from './reducers';
import { authUserFailure } from '../auth';
import { registerUserRequest } from '../register';

const ERROR_MESSAGE = 'Test message';
const PROFILE_DATA = { email: 'test@test.com', password: '123', name: 'Test', surname: 'Testing' };

describe('Error Reducer', () => {
    it('should save error message to store', () => {
        expect(errorReducer({}, authUserFailure(ERROR_MESSAGE))).toEqual(ERROR_MESSAGE);
    });

    it('should reset error message', () => {
        expect(errorReducer({}, registerUserRequest(PROFILE_DATA))).toEqual(null);
    });
});