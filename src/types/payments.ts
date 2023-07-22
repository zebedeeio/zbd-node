export interface InvoicePaymentDataResponseType {
    data: {
      id: string;
      fee: string;
      unit: string;
      amount: string;
      invoice: string;
      preimage: string;
      internalId: string;
      processedAt: string;
      confirmedAt: string;
      description: string;
      status: string;
    }
    success: boolean;
    message: string;
  }
  
  export interface SendPaymentOptionsType {
    description: string;
    internalId: string;
    invoice: string;
    callbackUrl: string;
    amount: string;
  }
  