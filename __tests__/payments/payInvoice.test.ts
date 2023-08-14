import { TEST_API_KEY } from '../../src/constants';
import { zbd } from '../../src/zbd';
import { InvoicePaymentDataResponseType, SendPaymentOptionsType, isInvoicePaymentDataResponseType } from '../../src/types/payments';

const ZBD = new zbd(TEST_API_KEY);

describe('payInvoice', () => {
  it('should successfully pay an invoice', async () => {
    const payload: SendPaymentOptionsType = {
      description: "Custom Payment Description",
      internalId: "internalId",
      invoice: "lnbc100n1pjdxlpvpp5r7uhh2m3dq48ysxvs8xmcph9tdkmrrlj6jyqa4arq2t9k0u6khmsdpzf4ujqsmgv9exwefq23jhxapqtfshq6t9wgcqzzsxqzfvsp56zkq022rqw5kvm08veluk9lfv7st6q7vkl3tm0d6p4weswmp3kus9qyyssqxjlqr0f0k4jswwz9v95cs5tslgmxl9ujuf8mxf09mddctd3haqr4dxxjuxalkjru3ssw26a88gs2r6tms9z9t39698jj3ddx5cctjvqpcacqmx",
      callbackUrl: "https://my-website.com/callback/zbd",
      amount: "10000"
    };

    const response = await ZBD.sendPayment(payload);



    console.log(response)
    
    // expect(isInvoicePaymentDataResponseType(response)).toBeTruthy();
    // expect(response.success).toBe(true);
    // expect(response.message).toBe("Payment done.");
    // expect(response.data.amount).toBe(String(payload.amount));
    // expect(response.data.description).toBe(payload.description);
  });

  describe('payInvoice error scenarios', () => {
    const payload: SendPaymentOptionsType = {
        description: "Custom Payment Description",
        internalId: "11af01d092444a317cb33faa6b8304b8",
        invoice: "lnbc1pjpf53rdqdgdshx6pqg9c8qpp56vu785r8m78dhxj3al58wtx29nxu93l5878hmkegu8aq56lnfzfqsp5w7jrwwwdt9xjrjvyh959hup06qhgjv9y4sc902u54qvfgqtpfzns9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqz385vqqzqqqqcqqqqqqqqqqqqqq9grzjqtsjy9p55gdceevp36fvdmrkxqvzfhy8ak2tgc5zgtjtra9xlaz97zpq6qqqjjcqqcqqqqqqqqqqqqqq9gsk96h5waj9v6eg7yz5tumhnmfgc4zz3u6p9ted9z4g6rkszz2e4kdj3vhmzmnqy2ardyw3k9ewsrjq636sm38t3s96d7h392x82859cpu9zxzf",
        callbackUrl: "https://my-website.com/callback/zbd",
        amount: "10000"
      };
    
    it('should return a 404 for a non-existent charge ID', async () => {
        await expect(ZBD.sendPayment(payload)).rejects.toMatchObject({
          message: "No Charge records found with this ID.",
          status: 404
        });
      });


  });
});
