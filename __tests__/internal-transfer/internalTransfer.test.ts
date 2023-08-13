import { TEST_API_KEY } from '../../src/constants';
import { InternalTransferOptionsType, isInternalTransferDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Initiate Internal Transfer', () => {

  it('should initiate an internal transfer successfully', async () => {
    // Mock parameters
    const requestBody: InternalTransferOptionsType = {
      amount: "10000",
      receiverWalletId: "b904ee02-ec0b-4fd4-b99f-1f2d3d0001a6"
    };

    const response = await ZBD.internalTransfer(requestBody);
    console.log(response)

    expect(response.success).toBe(true);
    expect(response.message).toBe('Internal Transfer done.');

    // Data Validation
    expect(isInternalTransferDataResponseType(response)).toBeTruthy();
  });

});

