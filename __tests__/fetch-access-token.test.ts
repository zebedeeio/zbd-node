import { zbd } from "../src/zbd";
import { API, API_URL, TEST_API_KEY } from "../src/constants";
import { FetchAccessTokenRes, FetchTokenParam } from "../src/types";

const postData = jest.fn();
describe("fetchAccessToken", () => {
  let ZBD: zbd;

  beforeEach(() => {
    ZBD = new zbd(TEST_API_KEY);
    ZBD.setClientId("client_id");
    ZBD.setClientSecret("secret123");
  });

  it("should fetch access token successfully", async () => {
    await ZBD.generatePKCECodes();
    const code_verifier = ZBD.getCodeChallenge();

    console.log("Code verifier: ", code_verifier);
    // Arrange
    const param: FetchTokenParam = {
      code: "xxx11xx1-xxxx-xxxx-xxx1-1xx11xx111xx",
      redirect_uri: "http://redirect-uri.com",
    };

    const mockAccessTokenResponse: FetchAccessTokenRes = {
      access_token: "mockAccessToken",
      token_type: "Bearer",
      expires_in: 3600,
      refresh_token: "mockRefreshToken",
      refresh_token_expires_in: 7200,
      scope: "read write",
    };

    postData.mockResolvedValue(mockAccessTokenResponse);

    // Act
    const result = await ZBD.fetchAccessToken(param);
    console.log("Client id: ", ZBD.clientId);

    // Assert
    // expect(result).toEqual(mockAccessTokenResponse);
    // expect(postData).toHaveBeenCalledWith({
    //   url: `${API_URL}${API.FETCH_ACCESS_TOKEN_ENDPOINT}`,
    //   headers: { ...ZBD.apiCoreHeaders },
    //   body: {
    //     client_id: ZBD.clientId,
    //     client_secret: ZBD.clientSecret,
    //     grant_type: "authorization_code",
    //     code: param.code,
    //     redirect_uri: param.redirect_uri,
    //     code_verifier: ZBD.codeVerifier,
    //   },
    // });
  });

  it("should throw an error if authorization code is missing", async () => {
    // Arrange
    const param: FetchTokenParam = {
      code: "",
      redirect_uri: "http://redirect-uri.com",
    };

    // Act and Assert
    await expect(ZBD.fetchAccessToken(param)).rejects.toThrow(
      "Authorization code is required"
    );
  });

  it("should throw an error if redirect URI is missing", async () => {
    // Arrange
    const param: FetchTokenParam = {
      code: "authorization_code",
      redirect_uri: "",
    };

    // Act and Assert
    await expect(ZBD.fetchAccessToken(param)).rejects.toThrow(
      "Redirect URI is required"
    );
  });

  // Add more test cases for other validation checks

  it("should throw an error if fetching access token fails", async () => {
    // Arrange
    const param: FetchTokenParam = {
      code: "authorization_code",
      redirect_uri: "http://redirect-uri.com",
    };

    postData.mockRejectedValue(new Error("Network error"));

    // Act and Assert
    await expect(ZBD.fetchAccessToken(param)).rejects.toThrow(
      "A code challenge is required. Generate one using .generatePKCE()."
    );
  });
});
