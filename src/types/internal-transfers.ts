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

export function isInternalTransferDataResponseType(data: any): data is InternalTransferDataResponseType {
  return typeof data.id === 'string' &&
      typeof data.senderWalletId === 'string' &&
      typeof data.receiverWalletId === 'string' &&
      typeof data.userId === 'string' &&
      typeof data.sendTxId === 'string' &&
      typeof data.receiveTxId === 'string' &&
      typeof data.status === 'string' &&
      typeof data.amount === 'string' &&
      typeof data.createdAt === 'string' &&
      typeof data.updatedAt === 'string';
}