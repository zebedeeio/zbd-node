import { TEST_API_KEY, TEST_RECEIVER_API_KEY } from '../../src/constants';
import { isWalletDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd'; 

const ZBD = new zbd(TEST_API_KEY); 


describe('getWallet', () => {
  
  it('should fetch wallet details successfully', async () => {
    const response = await ZBD.getWallet();
    expect(response).toBeDefined();
    console.log(response)
    
    // Data Validation
    expect(isWalletDataResponseType(response)).toBeTruthy();

    // Additional check for the balance to ensure it's a valid number string
    expect(Number(response.data.balance)).not.toBeNaN();
  });



});