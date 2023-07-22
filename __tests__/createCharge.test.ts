import { TEST_API_KEY } from '../src/constants';
import { zbd } from '../src/zbd'; 

const ZBD = new zbd(TEST_API_KEY); 

describe('createCharge', () => {
  it('should create a charge successfully', async () => {
    const chargeData = {
      amount: '10000',
      description: 'My Charge Description',
      expiresIn: 300,
      callbackUrl: 'https://your-website.com/callback',
      internalId: '11af01d092444a317cb33faa6b8304b8',
    };

    const response = await ZBD.createCharge(chargeData);

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(response.message).toBe('Charge created.');

    const { data } = response;
    expect(data.unit).toBe('msats');
    expect(data.amount).toBe(chargeData.amount);
    expect(data.description).toBe(chargeData.description);
    expect(data.internalId).toBe(chargeData.internalId);
    expect(data.callbackUrl).toBe(chargeData.callbackUrl);

    expect(data).toHaveProperty('status');
    expect(data).toHaveProperty('createdAt');
    expect(data).toHaveProperty('expiresAt');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('invoice');
  });
});
