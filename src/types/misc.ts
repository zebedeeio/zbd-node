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