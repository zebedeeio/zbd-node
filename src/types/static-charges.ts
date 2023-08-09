
export interface StaticChargeOptionsType {
  allowedSlots: string | null;
  minAmount: string;
  maxAmount: string;
  description: string;
  internalId: string | null;
  callbackUrl: string;
  successMessage: string;
}
  
export interface StaticChargeDataResponseType {
  data: {
    id: string;
    unit: string;
    slots: number;
    minAmount: string;
    maxAmount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string | null;
    identifier: string | null; 
    description: string;
    expiresAt: string;
    successMessage: string;
    allowedSlots: number | null;
    status: string;
    invoice: {
      request: string;
      uri: string;
    }
  }
  message: string;
}
export function isStaticChargeDataResponseType(obj: any): obj is StaticChargeDataResponseType {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.message === 'string' &&
    typeof obj.data === 'object' &&
    typeof obj.data.id === 'string' &&
    typeof obj.data.unit === 'string' &&
    typeof obj.data.slots === 'number' &&  
    typeof obj.data.minAmount === 'string' &&
    typeof obj.data.maxAmount === 'string' &&
    typeof obj.data.createdAt === 'string' &&
    typeof obj.data.callbackUrl === 'string' &&
    (typeof obj.data.internalId === 'string' || obj.data.internalId === null) &&
    typeof obj.data.description === 'string' &&
    (typeof obj.data.expiresAt === 'string' || obj.data.expiresAt === null) &&
    (typeof obj.data.identifier === 'string' || obj.data.identifier === null) && // Added identifier check
    typeof obj.data.successMessage === 'string' &&
    (typeof obj.data.allowedSlots === 'number' || obj.data.allowedSlots === null) &&
    typeof obj.data.status === 'string' &&
    typeof obj.data.invoice === 'object' &&
    typeof obj.data.invoice.request === 'string' &&
    typeof obj.data.invoice.uri === 'string'
  );
}
