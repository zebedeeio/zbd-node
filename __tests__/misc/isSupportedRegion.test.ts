import { TEST_API_KEY } from '../../src/constants';
import { SupportedRegionDataResponseType, isSupportedRegionResponseType,  } from '../../src/types/misc';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Is Supported Region', () => {
  const ipAddress = "66.109.221.0";  // Mocked IP address for test purposes

  it('should successfully check if an IP address belongs to a supported region', async () => {
    const response = await ZBD.isSupportedRegion(ipAddress); // Assuming ZBD has a method called checkSupportedRegion

    console.log(response)
    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isSupportedRegionResponseType(response)).toBeTruthy();
    expect(response.data.ipAddress).toBe(ipAddress);
    expect(response.data.isSupported).toBe(true);
  });

  describe('checkSupportedRegion error scenarios', () => {
    // Place any error scenario tests here, like invalid IP address format, etc.
  });
});