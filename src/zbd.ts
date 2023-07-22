import { API_URL, API } from './constants';
import { postData, getData, patchData } from './utils';
import {
  ChargeOptionsType,
  KeysendOptionsType,
  ChargeDataResponseType,
  WalletDataResponseType,
  BTCUSDDataResponseType,
  SendPaymentOptionsType,
  DecodeChargeOptionsType,
  ProdIPSDataResponseType,
  StaticChargeOptionsType,
  KeysendDataResponseType,
  InternalTransferOptionsType,
  StaticChargeDataResponseType,
  WithdrawalRequestOptionsType,
  SendGamertagPaymentOptionsType,
  InvoicePaymentDataResponseType,
  SupportedRegionDataResponseType,
  InternalTransferDataResponseType,
  WithdrawalRequestDataResponseType,
  FetchChargeFromGamertagOptionsType,
  GamertagTransactionDataResponseType,
  FetchUserIdByGamertagDataResponseType,
  FetchGamertagByUserIdDataResponseType,
  SendLightningAddressPaymentOptionsType,
  FetchChargeFromGamertagDataResponseType,
  ValidateLightningAddressDataResponseType,
  SendLightningAddressPaymentDataResponseType,
  CreateChargeFromLightningAddressOptionsType,
} from './types/index';

class zbd {
  apiBaseUrl: string;
  apiCoreHeaders: {apikey: string };  

  constructor(apiKey: string) {
    this.apiBaseUrl = API_URL;
    this.apiCoreHeaders = { apikey: apiKey };
  }

  async createCharge(options: ChargeOptionsType) {
    const {
      amount,
      expiresIn,
      internalId,
      description,
      callbackUrl,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.CHARGES_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        expiresIn,
        internalId,
        description,
        callbackUrl,
      },
    });

    return response;
  }

  async getCharge(chargeId: string) {
    const response = await getData({
      url: `${API_URL}${API.CHARGES_ENDPOINT}/${chargeId}`,
      headers: { ...this.apiCoreHeaders },
    });
      
    return response;
  }

  async decodeCharge(options: DecodeChargeOptionsType) {
    const { invoice } = options;

    const response = await postData({
      url: `${API_URL}${API.DECODE_INVOICE_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: { invoice },
    });

    return response;
  }

  async createWithdrawalRequest(options: WithdrawalRequestOptionsType) {    
    const {
      amount,
      expiresIn,
      internalId,
      callbackUrl,
      description,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.WITHDRAWAL_REQUESTS_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        expiresIn,
        internalId,
        callbackUrl,
        description,
      },
    });

    return response;
  }

  async getWithdrawalRequest(withdrawalRequestId: string) {
    const response = await getData({
      url: `${API_URL}${API.WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`,
      headers: { ...this.apiCoreHeaders },
    });
      
    return response;
  }

  async validateLightningAddress(lightningAddress: string) {    
    const response = await getData({
      url: `${API_URL}${API.VALIDATE_LN_ADDRESS_ENDPOINT}/${lightningAddress}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async sendLightningAddressPayment(options: SendLightningAddressPaymentOptionsType) {    
    const {
      amount,
      comment,
      lnAddress,
      internalId,
      callbackUrl,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.SEND_LN_ADDRESS_PAYMENT_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        comment,
        lnAddress,
        internalId,
        callbackUrl,
      },
    });

    return response;
  }

  async createChargeFromLightningAddress(options: CreateChargeFromLightningAddressOptionsType) {    
    const {
      amount,
      lnaddress,
      lnAddress,
      description,
    } = options;


    // Addressing issue on ZEBEDEE API where it accepts `lnaddress` property
    // instead of `lnAddress` property as is standardized
    let lightningAddress = lnaddress || lnAddress;

    const response = await postData({
      url: `${API_URL}${API.CREATE_CHARGE_FROM_LN_ADDRESS_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        description,
        lnaddress: lightningAddress,
      },
    });

    return response;
  }
  
  async getWallet() {
    const response = await getData({
      url: `${API_URL}${API.WALLET_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
    });
      
    return response;
  }

  async isSupportedRegion(ipAddress: string) {    
    const response = await getData({
      url: `${API_URL}${API.IS_SUPPORTED_REGION_ENDPOINT}/${ipAddress}`,
      headers: { ...this.apiCoreHeaders },
    });
      
    return response;
  }

  async getZBDProdIps() {    
    const response = await getData({
      url: `${API_URL}${API.FETCH_ZBD_PROD_IPS_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getBtcUsdExchangeRate() {    
    const response = await getData({
      url: `${API_URL}${API.BTCUSD_PRICE_TICKER_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async internalTransfer(options: InternalTransferOptionsType) {    
    const { amount, receiverWalletId } = options;

    const response = await postData({
      url: `${API_URL}${API.INTERNAL_TRANSFER_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        receiverWalletId,
      },
    });

    return response;
  }

  async sendKeysendPayment(options: KeysendOptionsType) {    
    const {
      amount,
      pubkey,
      metadata,
      tlvRecords,
      callbackUrl,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.KEYSEND_PAYMENT_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        pubkey,
        metadata,
        tlvRecords,
        callbackUrl,
      },
    });

    return response;
  }

  async sendPayment(options: SendPaymentOptionsType) {    
    const {
      amount,
      invoice,
      internalId,
      description,
      callbackUrl,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.PAYMENTS_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        invoice,
        internalId,
        description,
        callbackUrl,
      },
    });

    return response; 
  }

  async getPayment(paymentId: string) {    
    const response = await getData({
      url: `${API_URL}${API.PAYMENTS_ENDPOINT}/${paymentId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async sendGamertagPayment(options: SendGamertagPaymentOptionsType) {    
    const { amount, gamertag, description } = options;

    const response = await postData({
      url: `${API_URL}${API.SEND_GAMERTAG_PAYMENT_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        gamertag,
        description,
      },
    });

    return response;
  }

  async getGamertagTransaction(transactionId: string) {    
    const response = await getData({
      url: `${API_URL}${API.GET_GAMERTAG_PAYMENT_ENDPOINT}/${transactionId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getUserIdByGamertag(gamertag: string) {    
    const response = await getData({
      url: `${API_URL}${API.GET_USERID_FROM_GAMERTAG_ENDPOINT}/${gamertag}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getGamertagByUserId(userId: string) {    
    const response = await getData({
      url: `${API_URL}${API.GET_GAMERTAG_FROM_USERID_ENDPOINT}/${userId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

   async createGamertagCharge(options: FetchChargeFromGamertagOptionsType) {    
    const {
      amount,
      gamertag,
      internalId,
      description,
      callbackUrl,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.CREATE_CHARGE_FROM_GAMERTAG_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        amount,
        gamertag,
        internalId,
        description,
        callbackUrl,
      },
    });

    return response;
  }

  async createStaticCharge(options: StaticChargeOptionsType) {    
    const {
      minAmount,
      maxAmount,
      internalId,
      description,
      callbackUrl,
      allowedSlots,
      successMessage,
    } = options;

    const response = await postData({
      url: `${API_URL}${API.STATIC_CHARGES_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: {
        minAmount,
        maxAmount,
        internalId,
        callbackUrl,
        description,
        allowedSlots,
        successMessage,
      },
    });

    return response;
  }

  async updateStaticCharge(staticChargeId: string, updates: StaticChargeOptionsType) {    
    const response = await patchData({
      url: `${API_URL}${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
      headers: { ...this.apiCoreHeaders },
      body: updates,
    });

    return response;
  }

  async getStaticCharge(staticChargeId: string) {    
    const response = await getData({
      url: `${API_URL}${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }
}

export { zbd };
