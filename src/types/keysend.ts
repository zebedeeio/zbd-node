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
  tlvRecords: any[];
  metadata: any;
  callbackUrl: string;
}

export function isKeysendDataResponseType(data: any): data is KeysendDataResponseType {
    return typeof data.keysendId === 'string' &&
        typeof data.paymentId === 'string' &&
        typeof data.transaction.id === 'string' &&
        typeof data.transaction.walletId === 'string' &&
        typeof data.transaction.type === 'string' &&
        typeof data.transaction.totalAmount === 'string' &&
        typeof data.transaction.fee === 'string' &&
        typeof data.transaction.amount === 'string' &&
        typeof data.transaction.description === 'string' &&
        typeof data.transaction.status === 'string' &&
        (data.transaction.confirmedAt === null || typeof data.transaction.confirmedAt === 'string');
}