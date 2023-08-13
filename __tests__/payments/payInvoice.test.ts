// import { TEST_API_KEY } from '../src/constants';
// import { zbd } from '../src/zbd';
// import { InvoicePaymentDataResponseType, SendPaymentOptionsType, isPaymentResponseType } from '../src/types/payments';

// const ZBD = new zbd(TEST_API_KEY);

// describe('payInvoice', () => {
//   it('should successfully pay an invoice', async () => {
//     const payload: SendPaymentOptionsType = {
//       description: "Custom Payment Description",
//       internalId: "11af01d092444a317cb33faa6b8304b8",
//       invoice: "lnbc1pjpf53rdqdgdshx6pqg9c8qpp56vu785r8m78dhxj3al58wtx29nxu93l5878hmkegu8aq56lnfzfqsp5w7jrwwwdt9xjrjvyh959hup06qhgjv9y4sc902u54qvfgqtpfzns9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqz385vqqzqqqqcqqqqqqqqqqqqqq9grzjqtsjy9p55gdceevp36fvdmrkxqvzfhy8ak2tgc5zgtjtra9xlaz97zpq6qqqjjcqqcqqqqqqqqqqqqqq9gsk96h5waj9v6eg7yz5tumhnmfgc4zz3u6p9ted9z4g6rkszz2e4kdj3vhmzmnqy2ardyw3k9ewsrjq636sm38t3s96d7h392x82859cpu9zxzf",
//       callbackUrl: "https://my-website.com/callback/zbd",
//       amount: "10000"
//     };

//     const response = await ZBD.(payload);
    
//     expect(isPaymentResponseType(response)).toBeTruthy();
//     expect(response.success).toBe(true);
//     expect(response.message).toBe("Payment done.");
//     expect(response.data.amount).toBe(String(payload.amount));
//     expect(response.data.description).toBe(payload.description);
//   });

//   describe('payInvoice error scenarios', () => {
//     // You can add tests for different error scenarios here
//   });
// });
