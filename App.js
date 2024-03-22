import React from "react";
import { View, StyleSheet } from "react-native";
import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <View style={styles.container}>
      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
