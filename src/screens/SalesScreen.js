import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from '@rneui/themed';
import Header from "../components/Header";
import MyComponent from "../components/Card";

const Sales = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TouchableOpacity>
      <MyComponent />
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text>Sales</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start', 
    }
});

export default Sales;