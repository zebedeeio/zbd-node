import { TEST_API_KEY } from '../../src/constants';
import { ProdIPSDataResponseType , isApiProductionIPsResponseType } from '../../src/types/misc';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('API Production IPs', () => {

  it('should successfully fetch the list of production IPs', async () => {
    const response = await ZBD.getZBDProdIps(); // Assuming ZBD has a method called getProductionIPs

    console.log(response)
    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isApiProductionIPsResponseType(response)).toBeTruthy();
    expect(Array.isArray(response.data.ips)).toBe(true);
  });

  describe('getProductionIPs error scenarios', () => {
    // Place any error scenario tests here, like handling if the response doesn't contain 'ips', etc.
  });
});
