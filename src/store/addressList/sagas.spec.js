import { requestAddressList, requestAddressListFailure } from './actions';
import { recordSaga } from '../../common/helpers/record-saga.helper';
import { getAddressList } from './sagas';

jest.mock('../../services', () => ({ get: jest.fn(uri => Promise.resolve({ addresses: [] })) }));

// @FIXME: Doesn;t work properly. mock Api doesn;t work
describe('Address List Saga', () => {
    it('should request address list', async () => {

        const dispatched = await recordSaga(
            getAddressList,
            requestAddressList()
        );

        expect(dispatched.map(act => act.type)).toEqual([requestAddressListFailure().type]);
    })
});