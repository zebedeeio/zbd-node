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
  

export function isInvoicePaymentDataResponseType(obj: any): obj is InvoicePaymentDataResponseType {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.success === 'boolean' &&
    typeof obj.message === 'string' &&
    typeof obj.data === 'object' &&
    obj.data !== null &&
    typeof obj.data.id === 'string' &&
    typeof obj.data.fee === 'string' &&
    typeof obj.data.unit === 'string' &&
    typeof obj.data.amount === 'string' &&
    typeof obj.data.invoice === 'string' &&
    typeof obj.data.preimage === 'string' &&
    typeof obj.data.internalId === 'string' &&
    typeof obj.data.processedAt === 'string' &&
    typeof obj.data.confirmedAt === 'string' &&
    typeof obj.data.description === 'string' &&
    typeof obj.data.status === 'string'
  );
}
