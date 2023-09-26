import React from 'react'
import { Box, HStack, View, Text, Button, Icon, ButtonIcon } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import UserIcon from '../../atoms/icon/user';
import SearchBar from '../../molecules/search-bar/SearchBar';
export default function Header() {
  return (
    <SafeAreaView>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        pl={20}
        pr={20}
        pb={5}
        margin={10}
      >
        <SearchBar />
        <Box>
          <Button
            borderRadius="$full"
            size="lg"
            height={46}
            width={46}
            bg="#5942F4"
            borderColor="#5942F4"
          >
            <ButtonIcon as={UserIcon} />
          </Button>
        </Box>
      </HStack>
    </SafeAreaView>
  );
}