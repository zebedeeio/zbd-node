import { TEST_API_KEY } from '../../src/constants';
import { InternalTransferOptionsType, isInternalTransferDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Initiate Internal Transfer', () => {

  it('should initiate an internal transfer successfully', async () => {
    const requestBody: InternalTransferOptionsType = {
      amount: "1000",
      receiverWalletId: "b804ee02-ec0b-4fd4-b99f-1f2d3d0001a6"
    };

    const response = await ZBD.internalTransfer(requestBody);
  

    expect(response.success).toBe(true);
    expect(response.message).toBe('Internal Transfer done.');

    // Data Validation
    expect(isInternalTransferDataResponseType(response)).toBeTruthy();
  });

  describe('internalTransfer error scenarios', () => {
    it('should throw an error given an invalid receiver wallet ID', async () => {

      const errorBody: InternalTransferOptionsType = {
        amount: "100000",
        receiverWalletId: "1234"
      };
      
     await expect(ZBD.internalTransfer(errorBody)).rejects.toMatchObject({
      message: "Error processing transfer.",
      status: 400,
     })  
  
    });
  });

});

