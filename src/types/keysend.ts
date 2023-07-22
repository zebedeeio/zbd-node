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