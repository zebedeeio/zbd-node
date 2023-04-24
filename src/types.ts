export interface ZBD {
  apikey: string;
  apiBaseUrl: string;
  axiosInstance: any;
}

export interface WalletDataResponseType {
  data: {
    balance: string;
    unit: string;
  }
  message: string;
  success: boolean;
}

export interface ChargeOptionsType {
  expiresIn: number;
  amount: string;
  description: string;
  internalId: string;
  callbackUrl: string;
}

export interface ChargeDataResponseType {
  data: {
    id: string;
    unit: string;
    amount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string;
    description: string;
    expiresAt: string;
    confirmedAt: string;
    status: string;
    invoice: {
      request: string;
      uri: string;
    }
  }
  message: string;
  success: boolean;
}

export interface WithdrawalRequestOptionsType {
  amount: string;
  expiresIn: number;
  description: string;
  internalId: string;
  callbackUrl: string;
}

export interface WithdrawalRequestDataResponseType {
  data: {
    id: string;
    unit: string;
    amount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string;
    description: string;
    expiresAt: string;
    confirmedAt: string;
    status: string;
    fee: string;
    invoice: {
      request: string;
      uri: string;
      fastRequest: string;
      fastUri: string;
    }
  }
  message: string;
  success: boolean;
}

export interface BTCUSDDataResponseType {
  data: {
    btcUsdPrice: string;
    btcUsdTimestamp: string;
  }
  message: string;
  success: boolean;
}

export interface SupportedRegionDataResponseType {
  data: {
    ipAddress: string;
    isSupported: boolean;
    ipCountry: string;
    ipRegion: string;
  }
  success: boolean;
}

export interface ProdIPSDataResponseType {
  data: {
    ips: [string];
  }
  success: boolean;
}

export interface StaticChargeOptionsType {
  allowedSlots: string | null;
  minAmount: string;
  maxAmount: string;
  description: string;
  internalId: string;
  callbackUrl: string;
  successMessage: string;
}

export interface StaticChargeDataResponseType {
  data: {
    id: string;
    unit: string;
    slots: string;
    minAmount: string;
    maxAmount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string;
    description: string;
    expiresAt: string;
    confirmedAt: string;
    successMessage: string;
    allowedSlots: string | null;
    status: string;
    fee: string;
    invoice: {
      request: string;
      uri: string;
    }
  }
  message: string;
  success: boolean;
}

export interface FetchUserIdByGamertagDataResponseType {
  success: boolean;
  data: {
    id: string;
  }
}

export interface FetchGamertagByUserIdDataResponseType {
  success: boolean;
  message: string;
  data: {
    gamertag: string;
  }
}

export interface GamertagTransactionDataResponseType {
  data: {
    id: string;
    receivedId: string;
    amount: string;
    fee: string;
    unit: string;
    comment: string;
    status: string;
    confirmedAt: string;
    processedAt: string;
  }
  message: string;
  success: boolean;
}

export interface InternalTransferDataResponseType {
  data: {
    id: string;
    senderWalletId: string;
    receivedWalletId: string;
    userId: string;
    sendTxId: string;
    receiveTxId: string;
    status: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
  }
  message: string;
  success: boolean;
}

export interface InternalTransferOptionsType {
  amount: string;
  receiverWalletId: string;
}

export interface KeysendDataResponseType {
  data: {
    keysendId: string;
    paymentId: string;
    transaction: {
      id: string;
      walletId: string;
      type: string;
      totalAmount: string;
      fee: string;
      amount: string;
      description: string;
      status: string;
      confirmedAt: string;
    }
  }
  message: string;
  success: boolean;
}

export interface KeysendOptionsType {
  amount: string;
  pubkey: string;
  tlvRecords: string;
  metadata: string;
  callbackUrl: string;
}

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

export interface InvoicePaymentDataResponseType {
  data: {
    id: string;
    fee: string;
    unit: string;
    amount: string;
    invoice: string;
    preimage: string;
    internalId: string;
    processedAt: string;
    confirmedAt: string;
    description: string;
    status: string;
  }
  success: boolean;
  message: string;
}

export interface SendPaymentOptionsType {
  description: string;
  internalId: string;
  invoice: string;
  callbackUrl: string;
  amount: string;
}

export interface SendGamertagPaymentDataResponseType {
  data: {
    receiverId: string;
    transactionId: string;
    amount: string;
    comment: string;
  }
  success: boolean;
  message: string;
}

export interface SendGamertagPaymentOptionsType {
  gamertag: string;
  amount: string;
  description: string;
}

export interface FetchChargeFromGamertagDataResponseType {
  data: {
    unit: string;
    status: string;
    amount: string;
    createdAt: string;
    internalId: string;
    callbackUrl: string;
    description: string;
    invoiceRequest: string;
    invoiceExpiresAt: string;
    invoiceDescriptionHash: string | null;
  }
  success: boolean;
}

export interface FetchChargeFromGamertagOptionsType {
  amount: string;
  gamertag: string;
  description: string;
  callbackUrl: string;
  internalId: string;
}

 