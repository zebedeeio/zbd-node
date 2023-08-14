import { zbd } from '@zbd/node';
import { TEST_API_KEY } from '../../src/constants';
import { StaticChargeDataResponseType, StaticChargeOptionsType, isStaticChargeDataResponseType } from '../../src/types/static-charges';

  const ZBD = new zbd(TEST_API_KEY);

describe('PATCH Update Static Charge', () => {
  
  const STATIC_CHARGE_ID = '11311e05-c0da-4382-abb1-385a4659908b';
  it('should successfully update a Static Charge', async () => {
    const updateOptions: StaticChargeOptionsType = {
      allowedSlots: 0,
      minAmount: "10000",
      maxAmount: "5000000",
      description: "This is my editted static charge",
      internalId: "myInternalId1",
      callbackUrl: "https://my-website.com/zbd-callback",
      successMessage: "Congratulations your payment success msg was editted!"
    };


    const responseData = await ZBD.updateStaticCharge(STATIC_CHARGE_ID, updateOptions);

    expect(responseData.message).toBe('Successfully updated Static Charge.');
    expect(responseData.data.id).toBe(STATIC_CHARGE_ID);
    expect(responseData.data.description).toBe(updateOptions.description);
    // Data Validation 
    expect(isStaticChargeDataResponseType(responseData)).toBeTruthy();
  });

  describe('updateStaticCharge error scenarios', () => {
    it('should throw an error given a non-existent static Charge ID', async () => {

        const NON_EXISTENT_STATIC_CHARGE_ID = '10101';


        const invalidUpdateOptions: StaticChargeOptionsType = {
            allowedSlots: 0,
            minAmount: "10000",
            maxAmount: "5000000",
            description: "This is my editted static charge",
            internalId: "myInternalId1",
            callbackUrl: "https://my-website.com/zbd-callback",
            successMessage: "Congratulations your payment success msg was editted!"
          };
      
     await expect(ZBD.updateStaticCharge(NON_EXISTENT_STATIC_CHARGE_ID, invalidUpdateOptions)).rejects.toMatchObject({
      message: "Error updating Static Charge data.",
      status: 400,
     })  
  
    });
  });

});

