/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Sales from "./src/screens/Sales";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <Sales />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19, 19, 24, 0.9)",
  },
});*/

import React from "react";
import SalesScreen from "./src/screens/SalesScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {

  /*const [fontsLoaded, error] = useFonts({
    "ChakraPetch-Regular": require("./assets/fonts/ChakraPetch-Regular.ttf"),
    "ChakraPetch-Medium": require("./assets/fonts/ChakraPetch-Medium.ttf"),
    "ChakraPetch-Bold": require("./assets/fonts/ChakraPetch-Bold.ttf"),
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }*/

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SalesScreen"
          component={SalesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};
export default App;
