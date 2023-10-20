import React, { FC } from "react";
import { ButtonProps } from "@rneui/themed";
import { StyledButton } from "./button.styles";

export type IButtonProps = ButtonProps;

export const Button: FC<IButtonProps> = (props) => {
  return <StyledButton {...props} size="lg" />;
};

export default Button;
