import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CreateClassScreen from "./src/screens/CreateClassScreen";
import ManageClassScreen from "./src/screens/ManageClassScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateClass" component={CreateClassScreen} />
        <Stack.Screen name="ManageClass" component={ManageClassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
