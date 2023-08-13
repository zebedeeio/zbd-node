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


export function isSendLightningAddressPaymentDataResponseType(obj: any): obj is SendLightningAddressPaymentDataResponseType {
  return (
      obj !== null &&
      typeof obj === 'object' &&
      typeof obj.success === 'boolean' &&
      typeof obj.message === 'string' &&
      typeof obj.data === 'object' &&

      typeof obj.data.id === 'string' &&
      typeof obj.data.fee === 'string' &&
      typeof obj.data.unit === 'string' &&
      typeof obj.data.amount === 'string' &&
      typeof obj.data.invoice === 'string' &&
      (obj.data.preimage === null || typeof obj.data.preimage === 'string') &&
      typeof obj.data.walletId === 'string' &&
      typeof obj.data.transactionId === 'string' &&
      typeof obj.data.callbackUrl === 'string' &&
      typeof obj.data.internalId === 'string' &&
      typeof obj.data.comment === 'string' &&
      typeof obj.data.processedAt === 'string' &&
      typeof obj.data.createdAt === 'string' &&
      typeof obj.data.status === 'string'
  );
}

export function isFetchChargeFromLightningAddressResponseType(obj: any): obj is FetchChargeFromLightningAddressDataResponseType {
  return (
      obj &&
      typeof obj.success === 'boolean' &&
      obj.data &&
      typeof obj.data.lnaddress === 'string' &&
      typeof obj.data.amount === 'string' &&
      obj.data.invoice &&
      typeof obj.data.invoice.uri === 'string' &&
      typeof obj.data.invoice.request === 'string'
  );
}

export function isValidateLightningAddressDataResponseType(obj: any): obj is ValidateLightningAddressDataResponseType {
  return (
      obj &&
      typeof obj.success === 'boolean' &&
      obj.data &&
      typeof obj.data.valid === 'boolean' &&
      obj.data.metadata &&
      typeof obj.data.metadata.minSendable === 'number' &&
      typeof obj.data.metadata.maxSendable === 'number' &&
      typeof obj.data.metadata.commentAllowed === 'number' &&
      typeof obj.data.metadata.tag === 'string' &&
      typeof obj.data.metadata.metadata === 'string' &&
      typeof obj.data.metadata.callback === 'string' &&
      obj.data.metadata.payerData &&
      obj.data.metadata.payerData.name &&
      typeof obj.data.metadata.payerData.name.mandatory === 'boolean' &&
      obj.data.metadata.payerData.identifier &&
      typeof obj.data.metadata.payerData.identifier.mandatory === 'boolean' &&
      typeof obj.data.metadata.disposable === 'boolean'
  );
}
