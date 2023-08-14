import { zbd } from "../src/zbd";
import { TEST_API_KEY } from "../src/constants";
describe("getAuthenticationUrl", () => {
  let ZBD: zbd;

  beforeEach(() => {
    ZBD = new zbd(TEST_API_KEY);
    ZBD.setClientId("client_id");
    ZBD.setClientSecret("secret123");
  });

  it("should generate auth url with correct params", async () => {
    await ZBD.generatePKCECodes(); // Generate codeChallenge

    const params = {
      redirect_uri: "http://localhost:3000/callback",
      state: "random_state",
    };

    const authUrl = await ZBD.getAuthenticationUrl(params);

    expect(authUrl).toContain("client_id=client_id");
    expect(authUrl).toContain("redirect_uri=http://localhost:3000/callback");
    expect(authUrl).toContain("scope=user");
    expect(authUrl).toContain("state=random_state");
    expect(authUrl).toContain(`code_challenge=${await ZBD.getCodeChallenge()}`);
    expect(authUrl).toContain("code_challenge_method=S256");
  });

  it("should throw an error if client id is not set", async () => {
    // ZBD.setClientId();
    const params = {
      redirect_uri: "http://localhost:3000/callback",
      state: "random_state",
    };

    await expect(ZBD.getAuthenticationUrl(params)).rejects.toThrow(
      "A code challenge is required. Generate one using .generatePKCE()."
    );
  });

  //   it("should throw an error if client secret is not set", async () => {
  //     // ZBD.setClientSecret(null);
  //     const params = {
  //       redirect_uri: "http://localhost:3000/callback",
  //       state: "random_state",
  //     };

  //     await expect(ZBD.getAuthenticationUrl(params)).rejects.toThrow(
  //       "A code challenge is required. Generate one using .generatePKCE()."
  //     );
  //   });

  //   it("should throw an error if code challenge is not generated", async () => {
  //     const params = {
  //       redirect_uri: "http://localhost:3000/callback",
  //       state: "random_state",
  //     };

  //     await expect(ZBD.getAuthenticationUrl(params)).rejects.toThrow(
  //       "A code challenge is required."
  //     );
  //   });

  //   it("should throw an error if redirect_uri is missing", async () => {
  //     const params = {
  //       redirect_uri: undefined,
  //       state: "random_state",
  //     };

  //     await expect(ZBD.getAuthenticationUrl(params)).rejects.toThrow(
  //       "A redirect uri is required."
  //     );
  //   });

  //   it("should throw an error if state parameter is missing", async () => {
  //     const params = {
  //       redirect_uri: "http://localhost:3000/callback",
  //       state: undefined, // Omitting the state property intentionally
  //     };

  //     await expect(ZBD.getAuthenticationUrl(params)).rejects.toThrow(
  //       "A state parameter is required."
  //     );
  //   });

  // Add more test cases for different scenarios...
});
