import React from 'react'
import { Button, Icon, Text, View } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../components/atoms/icon/home";
import TasksIcon from '../components/atoms/icon/tasks';
import addNewIcon from '../components/atoms/icon/add-new';
import ProjectsIcon from '../components/atoms/icon/projects';
import SettingsIcon from "../components/atoms/icon/settings";

import Home from "../components/screens/Test";
import Test from "../components/screens/Test";
import Profile from "../components/screens/Profile";
import Projects from "../components/screens/Projects";
import Tasks from "../components/screens/Tasks";
import Settings from "../components/screens/Settings";

import Header from '../components/organisms/header/Header';

const Tab = createBottomTabNavigator();


const iconRouter = new Map([
  ["Home", HomeIcon],
  ["Tasks", TasksIcon],
  ["AddNew", addNewIcon],
  ["Projects", ProjectsIcon],
  ["Settings", SettingsIcon],
]);

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                as={iconRouter.get(route.name)}
                size="xl"
                color={focused ? "#5942F4" : "#AFB0BF"}
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
        <Tab.Screen name="AddNew" component={Test} />
        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}