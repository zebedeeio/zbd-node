import { TEST_API_KEY } from "../../src/constants";
import { zbd } from "../../src/zbd";
import { isInvoicePaymentDataResponseType } from "../../src/types/payments";

const ZBD = new zbd(TEST_API_KEY);

describe("getPaymentDetails", () => {
  const mockPaymentId = "30cba220-e8b0-4df7-81a8-88cbae76b929";

  it("should successfully fetch a payment detail", async () => {
    const response = await ZBD.getPayment(mockPaymentId);

    expect(isInvoicePaymentDataResponseType(response)).toBeTruthy();
    expect(response.success).toBe(true);
    expect(response.message).toBe("Fetched Payment.");
    expect(response.data.id).toBe(mockPaymentId);
    expect(response.data.description).toBe("Custom Payment Description");
  });

  describe("getPaymentDetails error scenarios", () => {
    it("should throw an error given incorrect payment id", async () => {
      const errorPaymentId = "error";

      await expect(ZBD.getPayment(errorPaymentId)).rejects.toMatchObject({
        message: "No Payment records found with this ID.",
        status: 404,
      });
    });
  });
});
