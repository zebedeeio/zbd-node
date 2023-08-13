import { zbd } from '@zbd/node';
import { TEST_API_KEY } from '../../src/constants';
import { StaticChargeDataResponseType, StaticChargeOptionsType, isStaticChargeDataResponseType } from '../../src/types/static-charges';

const ZBD = new zbd(TEST_API_KEY);

describe('createStaticCharge', () => {;
  
  // Data for creating static charge
  const validStaticChargeData: StaticChargeOptionsType = {
    allowedSlots: null,
    minAmount: "10000",
    maxAmount: "20000",
    description: "This is my static charge",
    internalId: "myInternalId1",
    callbackUrl: "https://my-website.com/zbd-callback",
    successMessage: "Congratulations your payment was successful!"
  };

  // Success
  it('should successfully create a static charge', async () => {
    const response = await ZBD.createStaticCharge(validStaticChargeData);
    expect(response.message).toBe("Successfully created Static Charge.");

    // Data Validation
    expect(isStaticChargeDataResponseType(response)).toBeTruthy();
  });



});
