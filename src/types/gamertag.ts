
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
  
   