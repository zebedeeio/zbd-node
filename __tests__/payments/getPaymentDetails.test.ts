import { TEST_API_KEY } from '../../src/constants';
import { zbd } from '../../src/zbd';
import { isInvoicePaymentDataResponseType } from '../../src/types/payments'; // Assuming you've created this function already based on our prior interactions

const ZBD = new zbd(TEST_API_KEY);

describe('getPaymentDetails', () => {
  const mockPaymentId = '4f0fa38f-efbe-485f-9293-95e697f6fbd4';

  it('should successfully fetch a payment detail', async () => {
    const response = await ZBD.getPayment(mockPaymentId); 
    console.log(response)
    
    expect(isInvoicePaymentDataResponseType(response)).toBeTruthy();
    expect(response.success).toBe(true);
    expect(response.message).toBe("Fetched Payment.");
    expect(response.data.id).toBe(mockPaymentId);
    expect(response.data.description).toBe("Custom Payment Description");

  });

  describe('getPaymentDetails error scenarios', () => {

  });
});
