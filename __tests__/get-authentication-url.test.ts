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
    const params = {
      redirect_uri: "http://localhost:3000/callback",
      state: "random_state",
    };

    await expect(ZBD.getAuthenticationUrl(params)).rejects.toThrow(
      "A code challenge is required. Generate one using .generatePKCE()."
    );
  });

  // Add more test cases for different scenarios...
});
