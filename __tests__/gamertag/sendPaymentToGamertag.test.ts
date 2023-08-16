import { TEST_API_KEY } from "../../src/constants";
import {
  SendGamertagPaymentOptionsType,
  isSendGamertagPaymentDataResponseType,
} from "../../src/types";
import { zbd } from "../../src/zbd";

const ZBD = new zbd(TEST_API_KEY);

describe("Send Payment to Gamertag", () => {
  const mockRequestBody: SendGamertagPaymentOptionsType = {
    gamertag: "foxp2",
    amount: "1000",
    description: "Sending to ZBD Gamertag",
  };

  it("should successfully send payment to a gamertag", async () => {
    const response = await ZBD.sendGamertagPayment(mockRequestBody); // Assuming ZBD has a method called sendPaymentToGamertag

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(response.message).toBe("Payment done.");

    expect(isSendGamertagPaymentDataResponseType(response)).toBeTruthy();
  });

  describe("sendPaymentToGamertag error scenarios", () => {
    it("should throw an error given a non-existent gamertag", async () => {
      const errorRequestBody: SendGamertagPaymentOptionsType = {
        gamertag: "fakeGamertagĆ",
        amount: "1000",
        description: "Sending to non-existent Gamertag",
      };

      await expect(
        ZBD.sendGamertagPayment(errorRequestBody)
      ).rejects.toMatchObject({
        message: "You cannot pay to this user, missing destination",
        status: 500,
      });
    });
  });
});
