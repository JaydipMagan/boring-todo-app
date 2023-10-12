import React, { FC } from "react";
import { Input, InputProps } from "@rneui/themed";

type IInputType = "text" | "password" | "email" | "number";

export type ITextFieldProps = InputProps & { type?: IInputType };

export const TextInputField: FC<ITextFieldProps> = ({ type = "text" }) => {
  return <Input secureTextEntry={type == "password"} />;
};

export default TextInputField;
