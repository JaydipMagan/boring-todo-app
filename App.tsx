import { GluestackUIProvider } from "@gluestack-ui/themed";
import TabNavigator from "./src/navigation/tab-navigator";


export default function App() {
  return (
    <GluestackUIProvider>
      <TabNavigator />
    </GluestackUIProvider>
  );
}

