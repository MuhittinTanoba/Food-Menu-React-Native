import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Appearance, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();

export default function App() {
  return (
    <>
      <StatusBar style={colorScheme && "light" ? "dark" : "light"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerStyle: { backgroundColor: "#ADC4CE" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#96B6C5" },
          }}
        >
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} />
          <Stack.Screen
            name="Meal Overview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
            // we can use in the component
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
