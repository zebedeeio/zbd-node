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

export interface DecodeChargeResponseType {
  data: {
    unit: string;
    status: string;
    amount: string;
    createdAt: string;
    internalId: string;
    callbackUrl: string;
    description: string;
    invoiceRequest: string;
    invoiceExpiresAt: string;
    invoiceDescriptionHash: string | null;
  }
  success: boolean;
}


export function isChargeResponseType(obj: any): obj is ChargeDataResponseType {
  return (
    obj &&
    typeof obj.success === "boolean" &&
    typeof obj.message === "string" &&
    obj.data &&
    typeof obj.data.id === "string" &&
    typeof obj.data.unit === "string" &&
    typeof obj.data.amount === "string" &&
    typeof obj.data.createdAt === "string" &&
    typeof obj.data.callbackUrl === "string" &&
    typeof obj.data.internalId === "string" &&
    typeof obj.data.description === "string" &&
    typeof obj.data.expiresAt === "string" &&
    typeof obj.data.confirmedAt === "string" || obj.data.confirmedAt === null &&
    typeof obj.data.status === "string" &&
    obj.data.invoice &&
    typeof obj.data.invoice.request === "string" &&
    typeof obj.data.invoice.uri === "string"
  );
}