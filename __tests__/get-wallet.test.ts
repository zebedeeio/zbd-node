import { TEST_API_KEY } from '../src/constants';
import { zbd } from '../src/zbd'; 

const ZBD = new zbd(TEST_API_KEY); 

describe('getWallet', () => {
  it('should fetch wallet data successfully', async () => {
    const response = await ZBD.getWallet();

    expect(response).toBeDefined();
    expect(response.data).toHaveProperty('unit');
    expect(response.data).toHaveProperty('balance');
    expect(response.message).toBe('Successfully retrieved Wallet.');
  });

});
