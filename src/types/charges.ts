export interface ChargeOptionsType {
    expiresIn: number;
    amount: string;
    description: string;
    internalId: string;
    callbackUrl: string;
  }
  
  export interface DecodeChargeOptionsType {
    invoice: string;
  }
  
  export interface ChargeDataResponseType {
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
      }
    }
    message: string;
    success: boolean;
  }

  