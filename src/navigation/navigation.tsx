import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tab-navigator";
import { useAuthContext, useAuthDispatchContext } from "../context/auth";
import { Login } from "../components/screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const authState = useAuthContext();
  const dispatch = useAuthDispatchContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {authState.userToken != null ? (
          <Stack.Screen name="Authenticated" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
