import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Navigation } from "@navigation";
import { config } from "./src/styles/theme";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Navigation />
    </GluestackUIProvider>
  );
}
