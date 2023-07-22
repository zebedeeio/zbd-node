export interface ValidateLightningAddressDataResponseType {
    data: {
      valid: boolean;
      metadata: {
        minSendable: number;
        maxSendable: number;
        commentAllowed: number;
        tag: string;
        metadata: string;
        callback: string;
        payerData: {
          name: {
            mandatory: boolean;
          },
          identifier: {
            mandatory: boolean;
          }
        },
        disposable: boolean;
      }
    }
    success: boolean;
  }
  
  export interface FetchChargeFromLightningAddressDataResponseType {
    data: {
      lnaddress: string;
      amount: string;
      invoice: {
        uri: string;
        request: string;
      }
    }
    success: boolean;
  }
  
  export interface SendLightningAddressPaymentDataResponseType {
    data: {
      id: string;
      fee: string;
      unit: string;
      amount: string;
      invoice: string;
      preimage: string | null;
      walletId: string;
      transactionId: string;
      callbackUrl: string;
      internalId: string;
      comment: string;
      processedAt: string;
      createdAt: string;
      status: string;
    }
    success: boolean;
    message: string;
  }
  
  export interface SendLightningAddressPaymentOptionsType {
    lnAddress: string;
    amount: string;
    comment: string;
    callbackUrl: string;
    internalId: string;
  }
  
  export interface CreateChargeFromLightningAddressOptionsType {
    amount: string
    lnaddress: string
    lnAddress?: string
    description: string
  }
  