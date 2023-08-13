// import { TEST_API_KEY } from '../src/constants';
// import { zbd } from '../src/zbd';
// import { isPaymentResponseType } from '../src/types/payments'; // Assuming you've created this function already based on our prior interactions

// const ZBD = new zbd(TEST_API_KEY);

// describe('getPaymentDetails', () => {
//   // A mock payment ID. Ideally, you'd get this from a prior API call that created a payment.
//   const mockPaymentId = 'caafd318-527c-466b-81f2-441d3a092aae';

//   it('should successfully fetch a payment detail', async () => {
//     const response = await ZBD.getPaymentDetails(mockPaymentId); // Assuming ZBD has a method called getPaymentDetails
    
//     expect(isPaymentResponseType(response)).toBeTruthy();
//     expect(response.success).toBe(true);
//     expect(response.message).toBe("Fetched Payment.");
//     expect(response.data.id).toBe(mockPaymentId);
//     expect(response.data.description).toBe("Custom Payment Description");
//     // ... you can add more assertions for other fields if needed
//   });

//   describe('getPaymentDetails error scenarios', () => {
//     // Place any error scenario tests here
//   });
// });
