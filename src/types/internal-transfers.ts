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

export function isInternalTransferDataResponseType(obj: any): obj is InternalTransferDataResponseType {
  return obj && 
      typeof obj.success === 'boolean' &&
      typeof obj.message === 'string' &&
      obj.data &&
      typeof obj.data.id === 'string' &&
      typeof obj.data.senderWalletId === 'string' &&
      typeof obj.data.receiverWalletId === 'string' &&
      typeof obj.data.userId === 'string' &&
      typeof obj.data.sendTxId === 'string' &&
      typeof obj.data.receiveTxId === 'string' &&
      typeof obj.data.status === 'string' &&
      typeof obj.data.amount === 'string' &&
      typeof obj.data.createdAt === 'string' &&
      typeof obj.data.updatedAt === 'string';
}
