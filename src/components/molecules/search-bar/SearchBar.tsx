import React from 'react'
import { View, Input, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed';
import SearchIcon from '../../atoms/icon/search';

export default function SearchBar() {
  return (
    <Input
      size="lg"
      width={"$72"}
      borderRadius={16}
    >
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder="" />
    </Input>
  );
}