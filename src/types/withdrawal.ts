export interface WithdrawalRequestOptionsType {
  amount: string;
  expiresIn: number;
  description: string;
  internalId: string;
  callbackUrl: string;
}
  
export interface GetWithdrawalRequestDataResponseType {
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
      fastRequest: string;
      fastUri: string;
    }
  }
  message: string;
  success: boolean;
}


export interface CreateWithdrawalRequestDataResponseType {
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
