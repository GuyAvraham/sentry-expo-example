import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Provider } from "react-redux";

import store from "./state";
import { makeErrorAsyncAction } from "./state/actions";

export default function App() {
  const onPress = () => {
    // store.dispatch(makeErrorAsyncAction());
    throw new Error("FFF");
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Button title="Do error" onPress={onPress} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
