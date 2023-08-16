
import { TEST_API_KEY } from '../../src/constants';
import { zbd } from '../../src/zbd';
import { ChargeDataResponseType, ChargeOptionsType, isChargeResponseType } from '../../src/types/charges';

const ZBD = new zbd(TEST_API_KEY);


describe('createCharge', () => {
  it('should successfully create a charge', async () => {
    const payload: ChargeOptionsType = {
      expiresIn: 300,
      amount: "10000",
      description: "My Charge Test Zapier",
      internalId: "internalId",
      callbackUrl: "https://my-website.com/zbd-callback"
    };

    const response = await ZBD.createCharge(payload);
    console.log(response)
    
    expect(isChargeResponseType(response)).toBeTruthy();
    expect(response.success).toBe(true);
    expect(response.message).toBe("Charge created.");
    expect(response.data.amount).toBe(payload.amount);
    expect(response.data.description).toBe(payload.description);
  });

  describe('createCharge error scenarios', () => {
    it('should throw an error given an erroneous payload (amount = 0)', async () => {

      const erroneousPayload: ChargeOptionsType = {
        expiresIn: 100,
        amount: "0",
        description: "My Charge Test Zapier",
        internalId: "internalId",
        callbackUrl: "https://my-website.com/zbd-callback"
      };
      
     await expect(ZBD.createCharge(erroneousPayload)).rejects.toMatchObject({
      message: "Request has missing or mismatch params.",
      status: 400,
     })  
  
    });
  });

});