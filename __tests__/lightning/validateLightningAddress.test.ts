import { TEST_API_KEY } from "../../src/constants";
import { zbd } from "../../src/zbd";
import {
  ValidateLightningAddressDataResponseType,
  isValidateLightningAddressDataResponseType,
} from "../../src/types/lightning"; // Your provided interface

const ZBD = new zbd(TEST_API_KEY);

describe("validateLightningAddress", () => {
  const mockLightningAddress = "andre@zbd.gg";

  it("should successfully validate a Lightning Address", async () => {
    const response = await ZBD.validateLightningAddress(mockLightningAddress);

    expect(response.success).toBe(true);

    // Data Validation
    expect(isValidateLightningAddressDataResponseType(response)).toBeTruthy();
  });

  describe("validateLightningAddress error scenarios", () => {
    const errorLightningAddress = "aol@lol.xqz";

    it("should say valid is false given invalid Lightning Address", async () => {
      const response = await ZBD.validateLightningAddress(
        errorLightningAddress
      );
      expect(response.data.valid).toBe(false);
      expect(response.success).toBe(true);
    });
  });
});
