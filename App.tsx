import { config, GluestackUIProvider } from "@gluestack-ui/themed";
import TabNavigator from "./src/navigation/tab-navigator";


export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <TabNavigator />
    </GluestackUIProvider>
  );
}

