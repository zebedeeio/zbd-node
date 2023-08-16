import { TEST_API_KEY, TEST_RECEIVER_API_KEY } from '../../src/constants';
import { zbd } from '../../src/zbd';
import { InvoicePaymentDataResponseType, SendPaymentOptionsType, isInvoicePaymentDataResponseType } from '../../src/types/payments';
import { ChargeOptionsType, isChargeResponseType, isWalletDataResponseType } from '../../src/types';

const payerZBD = new zbd(TEST_API_KEY);
const receiverZBD = new zbd(TEST_RECEIVER_API_KEY)

describe('payInvoice', () => {
  it('should successfully pay an invoice', async () => {

    // first, create charge with receiver
    const chargePayload: ChargeOptionsType = {
      expiresIn: 300,
      amount: "10000",
      description: "My Charge Test",
      internalId: "internalId",
      callbackUrl: "https://my-website.com/zbd-callback"
    };

    // verify charge
    const chargeResponse = await receiverZBD.createCharge(chargePayload);
    
    expect(isChargeResponseType(chargeResponse)).toBeTruthy();
    expect(chargeResponse.success).toBe(true);
    expect(chargeResponse.message).toBe("Charge created.");
    expect(chargeResponse.data.amount).toBe(chargePayload.amount);
    expect(chargeResponse.data.description).toBe(chargePayload.description);

    // create payment and pay it
    const paymentPayload: SendPaymentOptionsType = {
      description: "Custom Payment Description",
      internalId: "internalId",
      invoice: chargeResponse.data.invoice.request,
      callbackUrl: "https://my-website.com/callback/zbd",
      amount: chargeResponse.data.amount
    };

    const response = await payerZBD.sendPayment(paymentPayload);
    
    expect(isInvoicePaymentDataResponseType(response)).toBeTruthy();
    expect(response.success).toBe(true);
    expect(response.message).toBe("Payment done.");
    expect(response.data.amount).toBe(String(paymentPayload.amount));
    expect(response.data.description).toBe(paymentPayload.description);
  });

  describe('payInvoice error scenarios', () => {

    it('should throw an error when attempting to pay users own invoice', async () => {
    // create charge with user
    const chargePayload: ChargeOptionsType = {
      expiresIn: 300,
      amount: "10000",
      description: "My Charge Test",
      internalId: "internalId",
      callbackUrl: "https://my-website.com/zbd-callback"
    };

    const chargeResponse = await payerZBD.createCharge(chargePayload);
    
    expect(isChargeResponseType(chargeResponse)).toBeTruthy();
    expect(chargeResponse.success).toBe(true);
    expect(chargeResponse.message).toBe("Charge created.");
    expect(chargeResponse.data.amount).toBe(chargePayload.amount);
    expect(chargeResponse.data.description).toBe(chargePayload.description);


    const errorPaymentPayload: SendPaymentOptionsType = {
      description: "Custom Payment Description",
      internalId: "internalId",
      invoice: chargeResponse.data.invoice.request,
      callbackUrl: "https://my-website.com/callback/zbd",
      amount: chargeResponse.data.amount
    };

    await expect(payerZBD.sendPayment(errorPaymentPayload)).rejects.toMatchObject({
      message: "You cannot Pay your own Charge.",
      status: 400
    }); 

    })
    
    it('should throw an error when given non-existent invoice', async () => {

      const errorPayload: SendPaymentOptionsType = {
        description: "Custom Payment Description",
        internalId: "11af01d092444a317cb33faa6b8304b8",
        invoice: "adsa",
        callbackUrl: "https://my-website.com/callback/zbd",
        amount: "10000"
      };

        await expect(payerZBD.sendPayment(errorPayload)).rejects.toMatchObject({
          message: "Could not decode the provided invoice.",
          status: 400
        });
      });

       
      // Integration test:
    it('should throw an error when attempting to pay more than balance allows', async () => {
      
       
    const chargePayload: ChargeOptionsType = {
      expiresIn: 300,
      amount: "500000000",
      description: "My Charge Test",
      internalId: "internalId",
      callbackUrl: "https://my-website.com/zbd-callback"
    };

    // verify charge
    const chargeResponse = await receiverZBD.createCharge(chargePayload);
    
    expect(isChargeResponseType(chargeResponse)).toBeTruthy();
    expect(chargeResponse.success).toBe(true);
    expect(chargeResponse.message).toBe("Charge created.");
    expect(chargeResponse.data.amount).toBe(chargePayload.amount);
    expect(chargeResponse.data.description).toBe(chargePayload.description);

    // create payment and attempt to pay it
    const paymentPayload: SendPaymentOptionsType = {
      description: "Custom Payment Description",
      internalId: "internalId",
      invoice: chargeResponse.data.invoice.request,
      callbackUrl: "https://my-website.com/callback/zbd",
      amount: chargeResponse.data.amount
    };

    
    await expect(payerZBD.sendPayment(paymentPayload)).rejects.toMatchObject({
      message: "You do not have enough funds for this transaction and fees.",
      status: 400,
     })  

      });




  });
});
