
export interface StaticChargeOptionsType {
    allowedSlots: string | null;
    minAmount: string;
    maxAmount: string;
    description: string;
    internalId: string;
    callbackUrl: string;
    successMessage: string;
  }
  
  export interface StaticChargeDataResponseType {
    data: {
      id: string;
      unit: string;
      slots: string;
      minAmount: string;
      maxAmount: string;
      createdAt: string;
      callbackUrl: string;
      internalId: string;
      description: string;
      expiresAt: string;
      confirmedAt: string;
      successMessage: string;
      allowedSlots: string | null;
      status: string;
      fee: string;
      invoice: {
        request: string;
        uri: string;
      }
    }
    message: string;
  }
  