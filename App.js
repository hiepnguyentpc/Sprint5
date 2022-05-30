import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Demo Screens/Home Screen/HomeScreen";
import ProfileScreen from "./Demo Screens/Profiles/ProfileScreen";
import NewsScreen from "./Demo Screens/News/NewsScreen";
import QuestionScreen from "./Demo Screens/Questions/QuestionScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name = "News" component={NewsScreen}/>
        <Stack.Screen name = "Questions" component={QuestionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
