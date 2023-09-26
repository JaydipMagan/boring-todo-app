import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

const UserIcon = createIcon({
  viewBox: "0 0 28 28",
  path: (
    <>
      <Path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 15.167A5.833 5.833 0 1 0 14 3.5a5.833 5.833 0 0 0 0 11.667Z"
      />
      <Path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M23.333 24.5a9.334 9.334 0 0 0-18.666 0"
      />
    </>
  ),
});

export default UserIcon;
