import { TEST_API_KEY } from '../src/constants';
import { zbd } from '../src/zbd'; 

const ZBD = new zbd(TEST_API_KEY); 

describe('getBTCUSD', () => {
  it('should fetch BTC to USD exchange rate data successfully', async () => {
    const response = await ZBD.getBtcUsdExchangeRate();

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(response.data).toHaveProperty('btcUsdPrice');
    expect(response.data).toHaveProperty('btcUsdTimestamp');
    expect(response.message).toBe('Successfully retrieved BTC USD price ticker information.');
  });
});
