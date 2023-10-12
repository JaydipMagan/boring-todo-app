import React from 'react'
import { Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed";
import SearchIcon from "../../atoms/icon/search";

export default function SearchBar() {
  return (
    <Input size="lg" width={"$full"} borderRadius={16} height={"$3"}>
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder="hello" />
    </Input>
  );
}