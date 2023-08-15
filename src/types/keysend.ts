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
  tlvRecords: any;
  metadata: any;
  callbackUrl: string;
}

export function isKeysendDataResponseType(obj: any): obj is KeysendDataResponseType {
  return obj &&
      typeof obj.success === 'boolean' &&
      obj.data &&
      typeof obj.data.keysendId === 'string' &&
      typeof obj.data.paymentId === 'string' &&
      obj.data.transaction &&
      typeof obj.data.transaction.id === 'string' &&
      typeof obj.data.transaction.walletId === 'string' &&
      typeof obj.data.transaction.type === 'string' &&
      typeof obj.data.transaction.totalAmount === 'string' &&
      typeof obj.data.transaction.fee === 'string' &&
      typeof obj.data.transaction.amount === 'string' &&
      typeof obj.data.transaction.description === 'string' &&
      typeof obj.data.transaction.status === 'string' &&
      (obj.data.transaction.confirmedAt === null || typeof obj.data.transaction.confirmedAt === 'string');
}
