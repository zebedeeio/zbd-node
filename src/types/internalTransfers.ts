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