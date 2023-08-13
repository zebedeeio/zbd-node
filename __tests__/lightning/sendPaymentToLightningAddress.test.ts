import { TEST_API_KEY } from '../../src/constants';
import { zbd } from '../../src/zbd';

// Assuming you have created this type checker already
import { SendLightningAddressPaymentDataResponseType, SendLightningAddressPaymentOptionsType, isSendLightningAddressPaymentDataResponseType } from '../../src/types/lightning';

const ZBD = new zbd(TEST_API_KEY);

describe('sendToLightning', () => {

  it('should successfully send a payment to a Lightning Address', async () => {
    const payload = {
      lnAddress: "andre@zbd.gg",
      amount: "10000",
      comment: "Sending to a Lightning Address",
      callbackUrl: "https://your-domain.com/zbd-callback",
      internalId: "uniqueIdFromYourSystem"
    };

    const response = await ZBD.sendLightningAddressPayment(payload);
    
    expect(isSendLightningAddressPaymentDataResponseType(response)).toBeTruthy();
    expect(response.success).toBe(true);
    expect(response.data.amount).toBe(payload.amount);
  });

  describe('sendToLightning error scenarios', () => {
   
  });
});
