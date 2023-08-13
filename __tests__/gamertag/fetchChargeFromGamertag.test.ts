import { TEST_API_KEY } from '../../src/constants';
import { FetchChargeFromGamertagDataResponseType, FetchChargeFromGamertagOptionsType, isFetchChargeFromGamertagDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Fetch Charge from Gamertag', () => {
  const requestBody: FetchChargeFromGamertagOptionsType = {
    amount: "1000",
    gamertag: "andre",
    description: "Requesting Charge for Gamertag",
    callbackUrl: "https://your-website.com/zbd-callback",
    internalId: "test-internal-id"  
  };

  it('should successfully create a charge for a gamertag', async () => {
    const response = await ZBD.createGamertagCharge(requestBody);

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isFetchChargeFromGamertagDataResponseType(response)).toBeTruthy();
  });

  describe('fetchGamertagByUserID error scenarios', () => {
    it('should throw an error given a non-existent user ID', async () => {

      const errorRequestBody: FetchChargeFromGamertagOptionsType = {
        amount: "1000",
        gamertag: "fakeGamerTagĆ",
        description: "Requesting Charge for fake Gamertag",
        callbackUrl: "https://your-website.com/zbd-callback",
        internalId: "test-internal-id"  
      };
      
     await expect(ZBD.createGamertagCharge(errorRequestBody)).rejects.toMatchObject({
      message: "API request failed",
      status: 500,
     })  
  
    });
  });


});