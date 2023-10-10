import React from 'react'
import { Icon } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Header,
  Home,
  Tasks,
  Projects,
  Profile,
  AddNew,
  IconHome,
  IconAddNew,
  IconTasks,
  IconProjects,
  IconUser,
} from "@components";

const Tab = createBottomTabNavigator();

const iconRouter = new Map([
  ["Home", IconHome],
  ["Tasks", IconTasks],
  ["AddNew", IconAddNew],
  ["Projects", IconProjects],
  ["Profile", IconUser],
]);

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "#F3F7FF" },
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                as={iconRouter.get(route.name)}
                size="xl"
                color={focused ? "#5942F4" : "#AFB0BF"}
                height={35}
                width={35}
              />
            );
          },
          tabBarShowLabel: false,
          headerTitle: () => {
            return null;
          },
          header: () => {
            return <Header />;
          },
          headerTransparent: true,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="AddNew" component={AddNew} />
        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}