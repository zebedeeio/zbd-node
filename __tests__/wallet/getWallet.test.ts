import { TEST_API_KEY } from '../../src/constants';
import { WalletDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd'; 

const ZBD = new zbd(TEST_API_KEY); 

function isWalletDataResponseType(data: any): data is WalletDataResponseType {
    return typeof data === 'object' &&
        data !== null &&
        typeof data.message === 'string' &&
        typeof data.data === 'object' &&
        data.data !== null &&
        typeof data.data.unit === 'string' &&
        typeof data.data.balance === 'string';
}

describe('getWallet', () => {
  
  it('should fetch wallet details successfully', async () => {
    const response = await ZBD.getWallet();
    expect(response).toBeDefined();
    
    // Data Validation
    expect(isWalletDataResponseType(response)).toBeTruthy();

    // Additional check for the balance to ensure it's a valid number string
    expect(Number(response.data.balance)).not.toBeNaN();
  });



});