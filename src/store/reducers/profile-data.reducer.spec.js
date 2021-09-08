import { updateProfileSuccess } from '../profile';
import { profileDataReducer } from './profile-data.reducer';

const PROFILE_DATA = {
    name: 'Bob Marley',
    card: '4204 2042 0420 4200',
    exp: '08/26',
    cvc: '000'
};

describe('Profile Data Reducer', () => {
    it('should update profile data inside store', () => {
        expect(profileDataReducer({}, updateProfileSuccess(PROFILE_DATA))).toEqual(PROFILE_DATA);
    });
});