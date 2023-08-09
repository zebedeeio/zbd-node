import { TEST_API_KEY } from '../src/constants';
import { zbd } from '../src/zbd';
import { CreateWithdrawalRequestDataResponseType, WithdrawalRequestOptionsType, isCreateWithdrawalRequestDataResponseType, isGetWithdrawalRequestDataResponseType } from '../src/types'; 

const ZBD = new zbd(TEST_API_KEY);

describe('createWithdrawalRequest', () => {
  
  const requestBody: WithdrawalRequestOptionsType = {
    expiresIn: 300,
    amount: "10000",
    description: "My Withdrawal Description",
    internalId: "internalId",
    callbackUrl: "https://your-website.com/callback"
  };

  it('should successfully create a withdrawal request', async () => {
    
    const responseData: CreateWithdrawalRequestDataResponseType = await ZBD.createWithdrawalRequest(requestBody);
    
    expect(responseData.success).toBe(true);
    expect(responseData.message).toBe('Successfully created Withdrawal Request.');
    
    // Check if returned data matches request body data
    expect(responseData.data.amount).toBe(requestBody.amount);
    expect(responseData.data.description).toBe(requestBody.description);
    expect(responseData.data.internalId).toBe(requestBody.internalId);
    expect(responseData.data.callbackUrl).toBe(requestBody.callbackUrl);

    // Data Validation
    expect(isCreateWithdrawalRequestDataResponseType(responseData)).toBeTruthy();

  });

  

});

