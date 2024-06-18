import { IErrorMsg } from "../error-msg/error-msg.component";

export const validations: IErrorMsg = {
  street: [{ type: "required", message: "Street is required" }],
  city: [{ type: "required", message: "City is required" }],
  zip: [{ type: "required", message: "ZIP is required" }]
};
