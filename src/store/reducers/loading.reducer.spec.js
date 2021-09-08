import { authUserFailure } from '../auth';
import { registerUserRequest } from '../register';
import { isLoadingReducer } from './loading.reducer';

describe('Loading Reducer', () => {
    it('should set isLoading property to true', () => {
        expect(isLoadingReducer({ }, registerUserRequest({ email: 'test@test.com', password: '123', name: 'Test', surname: 'Testing' }))).toEqual(true);
    });

    it('should set isLoading property to false', () => {
        expect(isLoadingReducer({}, authUserFailure('Failure Message'))).toEqual(false);
    });
});