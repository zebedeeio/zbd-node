import { TEST_API_KEY } from "../../src/constants";
import { zbd } from "../../src/zbd";
import { KeysendOptionsType, isKeysendDataResponseType } from "../../src/types";

const ZBD = new zbd(TEST_API_KEY);

describe("Send Keysend Payment", () => {
  it("should send a keysend payment successfully", async () => {
    const requestBody: KeysendOptionsType = {
      amount: "1000",
      pubkey:
        "0332d57355d673e217238ce3e4be8491aa6b2a13f95494133ee243e57df1653ace",
      tlvRecords: [],
      metadata: {},
      callbackUrl: "{{callbackURL}}",
    };

    const response = await ZBD.sendKeysendPayment(requestBody);

    // Data Validation
    expect(response.success).toBe(true);
    expect(isKeysendDataResponseType(response)).toBeTruthy();
  });

  describe("Send Keysend error scenarios", () => {
    it("should fail keysend payment given an invalid pubkey", async () => {
      const errorBody: KeysendOptionsType = {
        amount: "1000",
        pubkey: "23",
        tlvRecords: [],
        metadata: {},
        callbackUrl: "{{callbackURL}}",
      };

      await expect(ZBD.sendKeysendPayment(errorBody)).rejects.toMatchObject({
        message: "Keysend payment failed.",
        status: 400,
      });
    });
  });
});
