import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

const HomeIcon = createIcon({
  viewBox: "0 0 35 35",
  path: (
    <>
      <Path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.375 13.125 17.5 2.917l13.125 10.208v16.042a2.917 2.917 0 0 1-2.917 2.916H7.292a2.917 2.917 0 0 1-2.917-2.916V13.125Z"
      />
      <Path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.125 32.083V17.5h8.75v14.583"
      />
    </>
  ),
});

export default HomeIcon;
