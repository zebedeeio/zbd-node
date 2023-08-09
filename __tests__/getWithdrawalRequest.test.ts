import { TEST_API_KEY } from '../src/constants';
import { zbd } from '../src/zbd';
import { GetWithdrawalRequestDataResponseType, isGetWithdrawalRequestDataResponseType } from '../src/types/withdrawal';

const ZBD = new zbd(TEST_API_KEY);

describe('getWithdrawalRequest', () => {

  const WITHDRAWAL_ID = 'e3c7321a-cc06-48da-90a8-589bd175ace9';

  it('should successfully fetch Withdrawal Request details', async () => {
    
    const responseData = await ZBD.getWithdrawalRequest(WITHDRAWAL_ID);
    
    console.log(responseData)

    expect(responseData.data.id).toBe(WITHDRAWAL_ID);

    // Data Validation
    expect(isGetWithdrawalRequestDataResponseType(responseData)).toBeTruthy();

  });

   // Withdrawal Request not found
  it('should return an error for a non-existent withdrawal ID', async () => {
    const NON_EXISTENT_WITHDRAWAL_ID = 'invalid-id'
    await expect(ZBD.getWithdrawalRequest(NON_EXISTENT_WITHDRAWAL_ID)).resolves.toMatchObject({
      message: "Failed to fetch withdrawal request."
    });
  });
});

