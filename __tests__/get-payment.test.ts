import { TEST_API_KEY } from '../src/constants';
import { zbd } from '../src/zbd'; 

const ZBD = new zbd(TEST_API_KEY); 

describe('getPayment', () => {
  // it('should fetch payment transaction details successfully', async () => {
  //   const paymentId = ''; // provide valid paymentId

  //   const data = await ZBD.getPayment(paymentId);
  //   console.log(data)

  //   expect(data).toBeDefined();
  //   expect(data.paymentId).toBe(paymentId); 
  // });

  it('should return an error when an invalid payment ID is provided', async () => {
    const invalidPaymentId = 'invalid-id';

    try {
      await ZBD.getPayment(invalidPaymentId);
    } catch (error) {
        if (error instanceof Error) { 
          console.log(error)
          expect(error.message).toBe('No Payment records found with this ID.')
        }
      
    }
  });
});