export interface WalletDataResponseType {
  data: {
    balance: string;
    unit: string;
  }
  message: string;
}

export function isWalletDataResponseType(data: any): data is WalletDataResponseType {
  return typeof data === 'object' &&
      data !== null &&
      typeof data.message === 'string' &&
      typeof data.data === 'object' &&
      data.data !== null &&
      typeof data.data.unit === 'string' &&
      typeof data.data.balance === 'string';
}