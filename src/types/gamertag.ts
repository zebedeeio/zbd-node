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
    receiverId: string;
    amount: string;
    fee: string;
    unit: string;
    comment: string;
    status: string;
    confirmedAt: string;
    processedAt: string;
  }
  message: string | undefined;
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

  

export function isSendGamertagPaymentDataResponseType(obj: any): obj is SendGamertagPaymentDataResponseType {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.success === 'boolean' &&
    typeof obj.message === 'string' &&
    typeof obj.data === 'object' &&
    typeof obj.data.receiverId === 'string' &&
    typeof obj.data.transactionId === 'string' &&
    typeof obj.data.amount === 'string' &&
    typeof obj.data.comment === 'string'
  );
}

export function isGamertagTransactionDataResponseType(object: any): object is GamertagTransactionDataResponseType {
  return (
    typeof object === 'object' &&
    object !== null &&
    (typeof object.message === 'string' || object.message === undefined) &&
    typeof object.success === 'boolean' &&
    typeof object.data === 'object' &&
    object.data !== null &&
    typeof object.data.id === 'string' &&
    typeof object.data.receiverId === 'string' &&
    typeof object.data.amount === 'string' &&
    typeof object.data.fee === 'string' &&
    typeof object.data.unit === 'string' &&
    typeof object.data.comment === 'string' &&
    typeof object.data.status === 'string' &&
    typeof object.data.confirmedAt === 'string' &&
    typeof object.data.processedAt === 'string'
  );
}


export function isFetchUserIdByGamertagDataResponseType(data: any): data is FetchUserIdByGamertagDataResponseType {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.success === 'boolean' &&
    typeof data.data === 'object' &&
    data.data !== null &&
    typeof data.data.id === 'string'
  );
}


export function isFetchGamertagByUserIDDataResponseType(data: any): data is FetchGamertagByUserIdDataResponseType {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.success === 'boolean' &&
    typeof data.data === 'object' &&
    data.data !== null &&
    typeof data.data.gamertag === 'string' &&
    typeof data.message === 'string'
  );
}


export function isFetchChargeFromGamertagDataResponseType(data: any): data is FetchChargeFromGamertagDataResponseType {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.success === 'boolean' &&
    typeof data.data === 'object' &&
    data.data !== null &&
    typeof data.data.unit === 'string' &&
    typeof data.data.status === 'string' &&
    typeof data.data.amount === 'string' &&
    typeof data.data.createdAt === 'string' &&
    typeof data.data.internalId === 'string' &&
    typeof data.data.callbackUrl === 'string' &&
    typeof data.data.description === 'string' &&
    typeof data.data.invoiceRequest === 'string' &&
    typeof data.data.invoiceExpiresAt === 'string' &&
    (typeof data.data.invoiceDescriptionHash === 'string' || data.data.invoiceDescriptionHash === null)
  );
}