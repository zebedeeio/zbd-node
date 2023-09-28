export interface BTCUSDDataResponseType {
  data: {
    btcUsdPrice: string;
    btcUsdTimestamp: string;
  }
  message: string;
  success: boolean;
}

export interface SupportedRegionDataResponseType {
  data: {
    ipAddress: string;
    isSupported: boolean;
    ipCountry: string;
    ipRegion: string;
  }
  success: boolean;
}

export interface ProdIPSDataResponseType {
  data: {
    ips: [string];
  }
  success: boolean;
}


export function isSupportedRegionResponseType(data: any): data is SupportedRegionDataResponseType {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.success === 'boolean' &&
    typeof data.data === 'object' &&
    data.data !== null &&
    typeof data.data.ipAddress === 'string' &&
    typeof data.data.isSupported === 'boolean' &&
    typeof data.data.ipCountry === 'string' &&
    typeof data.data.ipRegion === 'string'
  );
}

export function isApiProductionIPsResponseType(data: any): data is ProdIPSDataResponseType {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.success === 'boolean' &&
    typeof data.data === 'object' &&
    data.data !== null &&
    Array.isArray(data.data.ips) &&
    data.data.ips.every((ip: any) => typeof ip === 'string')
  );
}


export function isBtcUsdExchangeRateResponseType(data: any): data is BTCUSDDataResponseType {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.success === 'boolean' &&
    typeof data.message === 'string' &&
    typeof data.data === 'object' &&
    data.data !== null &&
    typeof data.data.btcUsdPrice === 'string' &&
    typeof data.data.btcUsdTimestamp === 'string'
  );
}