import { GluestackUIProvider } from "@gluestack-ui/themed";
import { TabNavigator } from "@nagivation";


export default function App() {
  return (
    <GluestackUIProvider>
      <TabNavigator />
    </GluestackUIProvider>
  );
}

