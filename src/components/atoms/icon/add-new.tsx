import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

const addNewIcon = createIcon({
  viewBox: "0 0 35 35",
  path: (
    <>
      <Path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M27.708 4.375H7.292a2.917 2.917 0 0 0-2.917 2.917v20.416a2.917 2.917 0 0 0 2.917 2.917h20.416a2.917 2.917 0 0 0 2.917-2.917V7.292a2.917 2.917 0 0 0-2.917-2.917ZM11.667 17.5h11.666M17.5 11.667v11.666"
      />
    </>
  ),
});

export default addNewIcon;
