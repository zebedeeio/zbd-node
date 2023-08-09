import { zbd } from '@zbd/node';
import { TEST_API_KEY } from '../src/constants';
import { ChargeDataResponseType, isChargeResponseType } from '../src/types/charges';

const ZBD = new zbd(TEST_API_KEY);

describe('getCharge', () => {
  const VALID_CHARGE_ID = '4f0fa38f-efbe-485f-9293-95e697f6fbd4';  
  const INVALID_CHARGE_ID = 'invalid';
  const INVALID_API_KEY = 'INVALID_API_KEY';
  
  // Success
  it('should fetch charge details for a valid charge ID', async () => {
    const data = await ZBD.getCharge(VALID_CHARGE_ID);
    expect(data.success).toBe(true);
    expect(data.message).toBe("Fetched Charge.");
    
    // Data Validation
    expect(isChargeResponseType(data)).toBeTruthy();
  });

  // Charge not found
  it('should return a 404 for a non-existent charge ID', async () => {
    await expect(ZBD.getCharge(INVALID_CHARGE_ID)).rejects.toMatchObject({
      message: "No Charge records found with this ID.",
      status: 404
    });
  });

});

