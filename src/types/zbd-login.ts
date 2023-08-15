export interface OAuth2AuthorizationRequestType {
  redirect_uri: string;
  state: string;
}

export interface FetchTokenParam {
  code: string;
  redirect_uri: string;
}

export interface FetchTokenBody {
  client_id: string;
  client_secret: string;
  code: string;
  code_verifier: string;
  grant_type: string;
  redirect_uri: string;
}

export interface FetchAccessTokenRes {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

export interface RefreshTokenParam {
  code: string;
  redirect_uri: string;
}

export interface RefreshTokenBody {
  client_id: string;
  client_secret: string;
  code: string;
  code_verifier: string;
  grant_type: string;
  redirect_uri: string;
}

export interface RefreshTokenRes {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

export interface FetchUserDataParam {
  access_token: string;
}

export interface ZBDUserData {
  id: string;
  email: string;
  gamertag: string;
  image?: string | null;
  is_verified: boolean;
  lightning_address: string;
  public_bio: string;
  public_static_charge: string;
}

export interface FetchUserWalletDataParam {
  access_token: string;
}

interface ZBDUserWalletDataLimits {
  daily: string;
  maxCredit: string;
  monthly: string;
  weekly: string;
}

export interface ZBDUserWalletData {
  balance: string;
  remaining_amount_limits: ZBDUserWalletDataLimits;
}
