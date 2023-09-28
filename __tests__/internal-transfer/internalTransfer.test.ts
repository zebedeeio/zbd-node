import { INTERNAL_TRANSFER_API_KEY } from "../../src/constants";
import {
  InternalTransferOptionsType,
  isInternalTransferDataResponseType,
} from "../../src/types";
import { zbd } from "../../src/zbd";

const ZBD = new zbd(INTERNAL_TRANSFER_API_KEY);

describe("Initiate Internal Transfer", () => {
  it("should initiate an internal transfer successfully", async () => {
    const requestBody: InternalTransferOptionsType = {
      amount: "1000",
      receiverWalletId: "a96de0a1-6e7f-4247-b755-02ec541449ea",
    };

    const response = await ZBD.internalTransfer(requestBody);

    expect(response.success).toBe(true);
    expect(response.message).toBe("Internal Transfer done.");

    // Data Validation
    expect(isInternalTransferDataResponseType(response)).toBeTruthy();
  });

  describe("internalTransfer error scenarios", () => {
    it("should throw an error given an invalid receiver wallet ID", async () => {
      const errorBody: InternalTransferOptionsType = {
        amount: "100000",
        receiverWalletId: "b804ee02-ec0b-4fd4-b99f-1f2d3d0001a6",
      };

      await expect(ZBD.internalTransfer(errorBody)).rejects.toMatchObject({
        message: "Error processing transfer.",
        status: 400,
      });
    });

    it("should throw an error given excess of balance", async () => {
      const errorBody: InternalTransferOptionsType = {
        amount: "5000000",
        receiverWalletId: "a96de0a1-6e7f-4247-b755-02ec541449ea",
      };

      await expect(ZBD.internalTransfer(errorBody)).rejects.toMatchObject({
        message: "Error processing transfer.",
        status: 400,
      });
    });
  });
});
