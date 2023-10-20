import React, { FC } from "react";
import { InputProps } from "@rneui/themed";
import { StyledInput } from "./input-field.styles";
import { IconUser } from "../icon";

type IInputType = "text" | "password" | "email" | "number";

export type ITextFieldProps = InputProps & { type?: IInputType };

export const TextInputField: FC<ITextFieldProps> = ({
  type = "text",
  ...rest
}) => {
  return <StyledInput secureTextEntry={type == "password"} {...rest} />;
};

export default TextInputField;
