import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

const SearchIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        stroke="#AFB0BF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.3-4.3"
      />
    </>
  ),
});

export default SearchIcon;
