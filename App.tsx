import React from "react";
import {StyleSheet, View, Button} from "react-native";
import {Provider} from "react-redux";
import * as Sentry from 'sentry-expo';

import store from "./state";
import {makeErrorAsyncAction} from "./state/actions";

Sentry.init({
  dsn: 'DONT UPLOAD SECRETS TO GIT',
  enableInExpoDevelopment: true,
  debug: true,
});

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Button title="throw error from button" onPress={() => {
          throw new Error("error from button")
        }}/>

        <Button title="throw error redux action (saga)" onPress={() => {
          store.dispatch(makeErrorAsyncAction());
        }}/>
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
