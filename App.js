import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home/Home";
import CriarTurma from "./src/pages/CriarTurma/criarTurma";
import GerenciarTurma from "./src/pages/GerenciarTurma/gerenciarTurma";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateClass" component={CriarTurma} />
        <Stack.Screen name="ManageClass" component={GerenciarTurma} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
