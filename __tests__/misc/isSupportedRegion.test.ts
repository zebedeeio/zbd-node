import { TEST_API_KEY } from '../../src/constants';
import { SupportedRegionDataResponseType, isSupportedRegionResponseType,  } from '../../src/types/misc';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Is Supported Region', () => {
  const ipAddress = "66.109.221.0";  
  const unsupportedIpAddress = "176.57.67.255";
  const errorIpAddress = "11111.11111";

  it('should successfully check that given IP address belongs to a supported region', async () => {
    const response = await ZBD.isSupportedRegion(ipAddress); 

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isSupportedRegionResponseType(response)).toBeTruthy();
    expect(response.data.ipAddress).toBe(ipAddress);
    expect(response.data.isSupported).toBe(true);
  });

  it('should successfully check that given IP address does not belong to a supported region', async () => {
    const response = await ZBD.isSupportedRegion(unsupportedIpAddress); 

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isSupportedRegionResponseType(response)).toBeTruthy();
    expect(response.data.ipAddress).toBe(unsupportedIpAddress);
    expect(response.data.isSupported).toBe(false);
  });

  describe('checkSupportedRegion error scenarios', () => {

    it('should throw error given invalid IP format', async () => {
      await expect(ZBD.isSupportedRegion(errorIpAddress)).rejects.toMatchObject({
        message: "Ip Address is not valid.",
        status: 400,
       })  
    });
    

  });
});