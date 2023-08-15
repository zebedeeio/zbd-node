import { API_URL, API } from "./constants";
import { postData, getData, patchData } from "./utils";
import {
  ChargeOptionsType,
  KeysendOptionsType,
  ChargeDataResponseType,
  WalletDataResponseType,
  BTCUSDDataResponseType,
  SendPaymentOptionsType,
  DecodeChargeOptionsType,
  DecodeChargeResponseType,
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
  GetWithdrawalRequestDataResponseType,
  CreateWithdrawalRequestDataResponseType,
  FetchChargeFromGamertagOptionsType,
  GamertagTransactionDataResponseType,
  FetchUserIdByGamertagDataResponseType,
  FetchGamertagByUserIdDataResponseType,
  SendLightningAddressPaymentOptionsType,
  FetchChargeFromGamertagDataResponseType,
  ValidateLightningAddressDataResponseType,
  SendLightningAddressPaymentDataResponseType,
  CreateChargeFromLightningAddressOptionsType,
  SendGamertagPaymentDataResponseType,
  FetchChargeFromLightningAddressDataResponseType,
  OAuth2AuthorizationRequestType,
  FetchTokenBody,
  FetchTokenParam,
  FetchAccessTokenRes,
  RefreshTokenParam,
  RefreshTokenBody,
  RefreshTokenRes,
  FetchUserDataParam,
  ZBDUserData,
  ZBDUserWalletData,
  FetchUserWalletDataParam,
} from "./types/index";
import * as crypto from "crypto";

let Encoder: { new (): any; new (): TextEncoder; prototype?: TextEncoder };
const PKCELength: number = 128;

class zbd {
  apiBaseUrl: string;
  apiCoreHeaders: { apikey: string };
  codeVerifier!: string;
  codeChallenge!: string;
  clientSecret!: string;
  clientId!: string;

  constructor(apiKey: string) {
    this.apiBaseUrl = API_URL;
    this.apiCoreHeaders = { apikey: apiKey };
  }

  async createCharge(options: ChargeOptionsType) {
    const { amount, expiresIn, internalId, description, callbackUrl } = options;

    const response: ChargeDataResponseType = await postData({
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
    const response: ChargeDataResponseType = await getData({
      url: `${API_URL}${API.CHARGES_ENDPOINT}/${chargeId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async decodeCharge(options: DecodeChargeOptionsType) {
    const { invoice } = options;

    const response: DecodeChargeResponseType = await postData({
      url: `${API_URL}${API.DECODE_INVOICE_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
      body: { invoice },
    });

    return response;
  }

  async createWithdrawalRequest(options: WithdrawalRequestOptionsType) {
    const { amount, expiresIn, internalId, callbackUrl, description } = options;

    const response: CreateWithdrawalRequestDataResponseType = await postData({
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
    const response: GetWithdrawalRequestDataResponseType = await getData({
      url: `${API_URL}${API.WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async validateLightningAddress(lightningAddress: string) {
    const response: ValidateLightningAddressDataResponseType = await getData({
      url: `${API_URL}${API.VALIDATE_LN_ADDRESS_ENDPOINT}/${lightningAddress}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async sendLightningAddressPayment(
    options: SendLightningAddressPaymentOptionsType
  ) {
    const { amount, comment, lnAddress, internalId, callbackUrl } = options;

    const response: SendLightningAddressPaymentDataResponseType =
      await postData({
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

  async createChargeFromLightningAddress(
    options: CreateChargeFromLightningAddressOptionsType
  ) {
    const { amount, lnaddress, lnAddress, description } = options;

    // Addressing issue on ZBD API where it accepts `lnaddress` property
    // instead of `lnAddress` property as is standardized
    let lightningAddress = lnaddress || lnAddress;

    const response: FetchChargeFromLightningAddressDataResponseType =
      await postData({
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
    const response: WalletDataResponseType = await getData({
      url: `${API_URL}${API.WALLET_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async isSupportedRegion(ipAddress: string) {
    const response: SupportedRegionDataResponseType = await getData({
      url: `${API_URL}${API.IS_SUPPORTED_REGION_ENDPOINT}/${ipAddress}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getZBDProdIps() {
    const response: ProdIPSDataResponseType = await getData({
      url: `${API_URL}${API.FETCH_ZBD_PROD_IPS_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getBtcUsdExchangeRate() {
    const response: BTCUSDDataResponseType = await getData({
      url: `${API_URL}${API.BTCUSD_PRICE_TICKER_ENDPOINT}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async internalTransfer(options: InternalTransferOptionsType) {
    const { amount, receiverWalletId } = options;

    const response: InternalTransferDataResponseType = await postData({
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
    const { amount, pubkey, metadata, tlvRecords, callbackUrl } = options;

    const response: KeysendDataResponseType = await postData({
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
    const { amount, invoice, internalId, description, callbackUrl } = options;

    const response: InvoicePaymentDataResponseType = await postData({
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

    const response: SendGamertagPaymentDataResponseType = await postData({
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
    const response: GamertagTransactionDataResponseType = await getData({
      url: `${API_URL}${API.GET_GAMERTAG_PAYMENT_ENDPOINT}/${transactionId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getUserIdByGamertag(gamertag: string) {
    const response: FetchUserIdByGamertagDataResponseType = await getData({
      url: `${API_URL}${API.GET_USERID_FROM_GAMERTAG_ENDPOINT}/${gamertag}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async getGamertagByUserId(userId: string) {
    const response: FetchGamertagByUserIdDataResponseType = await getData({
      url: `${API_URL}${API.GET_GAMERTAG_FROM_USERID_ENDPOINT}/${userId}`,
      headers: { ...this.apiCoreHeaders },
    });

    return response;
  }

  async createGamertagCharge(options: FetchChargeFromGamertagOptionsType) {
    const { amount, gamertag, internalId, description, callbackUrl } = options;

    const response: FetchChargeFromGamertagDataResponseType = await postData({
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

    const response: StaticChargeDataResponseType = await postData({
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

  async updateStaticCharge(
    staticChargeId: string,
    updates: StaticChargeOptionsType
  ) {
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

  // Authorization

  OAuth2AuthorizationUrl = (domain = API_URL) => {
    return `${domain}`;
  };

  /**
   * Generates an authentication URL for initiating the OAuth2 authorization flow.
   *
   * @param {OAuth2AuthorizationRequestType} param - An object containing authorization request parameters.
   * @returns {Promise<string>} A promise that resolves with the generated authentication URL.
   *
   * @throws {Error} If any required parameters are missing or if errors occur during URL generation.
   *
   * @example
   * const params = {
   *   redirect_uri: "http://localhost:3000/callback",
   *   state: "random_state",
   * };
   * const authUrl = await ZBD.getAuthenticationUrl(params);
   * console.log(authUrl); // Print the generated authentication URL
   */
  async getAuthenticationUrl(param: OAuth2AuthorizationRequestType) {
    const { redirect_uri, state } = param;
    let scope: string = "user";
    let response_type: string = "code";
    const baseUrl = this.OAuth2AuthorizationUrl();
    const client_id = this.getClientId();
    const client_secret = this.getClientSecret();
    if (!client_id) {
      throw new Error(
        "A client id is required. You can set the client id using .setClientId()."
      );
    }

    if (!redirect_uri) {
      throw new Error("A redirect uri is required.");
    }

    if (!client_secret) {
      throw new Error(
        "A client secret is required. You can set the client secret using .setClientSecret()."
      );
    }
    if (!state) {
      throw new Error("A state parameter is required.");
    }

    if (!this.codeChallenge) {
      throw new Error(
        "A code challenge is required. Generate one using .generatePKCE()."
      );
    }

    const code_challenge_method = "S256";

    let url = `${baseUrl}${API.GET_AUTHORIZATION_ENDPOINT}`;
    url += `?response_type=${response_type}`;
    url += `&client_id=${client_id}`;
    url += `&redirect_uri=${redirect_uri}`;
    url += `&scope=${scope}`;
    url += `&state=${state}`;
    url += `&code_challenge=${this.codeChallenge}`;
    url += `&code_challenge_method=${code_challenge_method}`;

    return url;
  }

  createBrowserSafeString(toBeConverted: any) {
    const convertedString = toBeConverted
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
    return convertedString;
  }

  /**
   * Sets the client Secret
   * @param {String} secret - The client secret
   */
  setClientSecret(secret: string) {
    this.clientSecret = secret;
  }

  /**
   * Get the client secret
   * @returns {String} Client id
   */
  getClientSecret() {
    return this.clientSecret;
  }

  /**
   * Get client ID
   * @returns {String} Client id
   */
  getClientId() {
    return this.clientId;
  }

  /**
   * Sets client ID
   * @param {String} clientId - The client ID
   */
  setClientId(clientId: string) {
    this.clientId = clientId;
  }

  /**
   * Sets the code verifier for PKCE flow
   * @param {String} codeVerifier - new code verifier
   */
  setCodeVerifier(codeVerifier: string) {
    this.codeVerifier = codeVerifier;
  }

  /**
   * Gets the code verifier for PKCE flow
   * @returns {String} - code verifier for PKCE
   */
  getCodeChallenge() {
    return this.codeChallenge;
  }
  /**
   * Generates a random code verifier and code challenge for PKCE
   * @returns {Promise} resolves when code challenge is generated
   * @throws {Error} if code challenge generation fails
   */
  async generateCodeChallenge() {
    const encoder = new TextEncoder();
    const codeData = encoder.encode(this.codeVerifier);
    let codeChallenge;
    if (this.codeVerifier) {
      return crypto.subtle.digest("SHA-256", codeData).then((digestedHash) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(digestedHash))
        );
        codeChallenge = this.createBrowserSafeString(base64String).substr(
          0,
          128
        );
        this.codeChallenge = codeChallenge;
      });
    }

    return Promise.resolve();
  }

  /**
   * Generates a random code verifier and corresponding code challenge for PKCE (Proof Key for Code Exchange).
   * @returns {Promise<void>} Resolves when the code challenge is generated successfully.
   * @throws {Error} If code challenge generation or other steps fail.
   */
  async generatePKCECodes() {
    let codeVerifier;

    const randomBytes = crypto.randomBytes(PKCELength);
    codeVerifier = this.createBrowserSafeString(randomBytes).substr(0, 128);

    this.codeVerifier = codeVerifier;

    return await this.generateCodeChallenge();
  }

  /**
   * Fetches an access token using the provided authorization code and parameters.
   * @param param - An object containing parameters for fetching the access token.
   * @returns A promise that resolves with the access token response or rejects with an error.
   * @throws Error if required parameters are missing or not set.
   */
  async fetchAccessToken(param: FetchTokenParam) {
    if (!param.code) {
      throw new Error("Authorization code is required");
    }

    if (!param.redirect_uri) {
      throw new Error("Redirect URI is required");
    }

    if (!this.codeChallenge) {
      throw new Error(
        "A code challenge is required. Generate one using .generatePKCE()."
      );
    }

    if (!this.clientId) {
      throw new Error("Client ID is required. Set it using .setClientId()");
    }

    if (!this.clientSecret) {
      throw new Error(
        "Client Secret is required. Set it using .setClientSecret()"
      );
    }

    const body: FetchTokenBody = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: "authorization_code",
      code: param.code,
      redirect_uri: param.redirect_uri,
      code_verifier: this.codeVerifier,
    };

    console.log(
      "URL: ",
      `${API_URL}${API.FETCH_ACCESS_TOKEN_ENDPOINT}?Content-Type=application/json`
    );

    const response: FetchAccessTokenRes = await postData({
      url: `${API_URL}${API.FETCH_ACCESS_TOKEN_ENDPOINT}?Content-Type=application/json`,
      headers: { ...this.apiCoreHeaders },
      body: body,
    });

    return response;
  }

  /**
   * Refreshes an access token using the provided refresh token and other required parameters.
   * @param param - The RefreshTokenParam object containing the necessary parameters.
   * @throws {Error} - Throws an error if any required parameter is missing.
   * @returns {Promise<RefreshTokenRes>} - Returns a promise that resolves with the refreshed token response.
   */
  async refreshToken(param: RefreshTokenParam) {
    if (!param.code) {
      throw new Error("Authorization code is required");
    }

    if (!param.redirect_uri) {
      throw new Error("Redirect URI is required");
    }

    if (!this.codeChallenge) {
      throw new Error(
        "A code challenge is required. Generate one using .generatePKCE()."
      );
    }

    if (!this.clientId) {
      throw new Error("Client ID is required. Set it using .setClientId()");
    }

    if (!this.clientSecret) {
      throw new Error(
        "Client Secret is required. Set it using .setClientSecret()"
      );
    }

    const body: RefreshTokenBody = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: "refresh_token",
      code: param.code,
      redirect_uri: param.redirect_uri,
      code_verifier: this.codeVerifier,
    };

    const response: RefreshTokenRes = await postData({
      url: `${API_URL}${API.REFRESH_TOKEN_ENDPOINT}?Content-Type=application/json`,
      headers: { ...this.apiCoreHeaders },
      body: body,
    });

    return response;
  }

  /**
   * Fetches user data using the provided access token.
   * @param param - The FetchUserDataParam object containing the required parameters.
   * @throws {Error} - Throws an error if the access token is missing.
   * @returns {Promise<ZBDUserData>} - Returns a promise that resolves with the fetched user data.
   */
  async fetchUserData(param: FetchUserDataParam) {
    if (!param.access_token) {
      throw new Error("Access token is required");
    }

    const headers = {
      ...this.apiCoreHeaders,
      usertoken: `Bearer ${param.access_token}`,
    };

    const response: ZBDUserData = await getData({
      url: `${API_URL}${API.GET_USER_ENDPOINT}`,
      headers: headers,
    });

    return response;
  }

  /**
   * Fetches user wallet data using the provided access token.
   * @param param - The FetchUserWalletDataParam object containing the required parameters.
   * @throws {Error} - Throws an error if the access token is missing.
   * @returns {Promise<ZBDUserWalletData>} - Returns a promise that resolves with the fetched user wallet data.
   */
  async fetchUserWalletData(param: FetchUserWalletDataParam) {
    if (!param.access_token) {
      throw new Error("Access token is required");
    }

    const headers = {
      ...this.apiCoreHeaders,
      usertoken: `Bearer ${param.access_token}`,
    };

    const response: ZBDUserWalletData = await getData({
      url: `${API_URL}${API.GET_USER_WALLET_DATA_ENDPOINT}`,
      headers: headers,
    });

    return response;
  }
}

export { zbd };
