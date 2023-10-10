import { StatusBar } from "expo-status-bar";
import { View } from "@gluestack-ui/themed";
import { FC, PropsWithChildren } from "react";

export const Screen: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View
      flex={1}
      backgroundColor="#F3F7FF"
      alignItems="center"
      justifyContent="center"
    >
      <StatusBar style="auto" />
      {children}
    </View>
  );
};
