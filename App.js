import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Appearance } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";


const Stack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();

export default function App() {
  return (
    <>
      <StatusBar style={colorScheme && "light" ?  "dark" : "light"}/>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Meals Categories" component={CategoriesScreen}/>
          <Stack.Screen name="Meal Overview" component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
