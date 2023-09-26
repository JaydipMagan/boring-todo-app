import React from 'react'
import { Box, HStack } from '@gluestack-ui/themed';

export default function NavBar() {
  return (
    <HStack space="xs" reversed={false}>
      <Box w="$20" h="$20" bg="$blue300" />
      <Box w="$20" h="$20" bg="$blue400" />
      <Box w="$20" h="$20" bg="$blue500" />
    </HStack>
  );
}