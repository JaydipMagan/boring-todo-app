import { createIcon } from "@gluestack-ui/themed";
import { Path } from "react-native-svg";

const TasksIcon = createIcon({
  viewBox: "0 0 35 35",
  path: (
    <>
      <Path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.833 29.167h23.334a2.917 2.917 0 0 0 2.916-2.917V11.667a2.917 2.917 0 0 0-2.916-2.917H17.602a2.917 2.917 0 0 1-2.42-1.313l-1.197-1.75a2.916 2.916 0 0 0-2.42-1.312H5.833a2.917 2.917 0 0 0-2.916 2.917V26.25a2.925 2.925 0 0 0 2.916 2.917Z"
      />
    </>
  ),
});

export default TasksIcon;
