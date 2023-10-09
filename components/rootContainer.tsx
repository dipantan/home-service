import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PermissionsAndroid,
  AppState,
  ToastAndroid,
  Alert,
  Platform,
  Linking,
} from "react-native";
// import RNExitApp from "react-native-exit-app";

import { getIsAuthenticated } from "../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "expo-router";
import { clearError } from "../store/slices/auth";
import state from "../store";

const Container: JSX.Element = ({ children }) => {
  const isAuthenticated: Boolean = useSelector(getIsAuthenticated);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const { type } = state.getState().auth;

  function askPermission() {
    // console.log("askPermission called");
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    )
      .then((permission) => {
        if (permission === "denied" || permission === "never_ask_again") {
          const release = Platform.constants["Release"];
          if (release > 12) {
            if (!isDialogOpened) {
              console.log("Dialog opened");
              Alert.alert("", "You must give notification permission", [
                {
                  text: "Exit",
                  style: "destructive",
                  // onPress: () => RNExitApp.exitApp(),
                },
                {
                  text: "Open Settings",
                  style: "default",
                  onPress: () => {
                    Linking.openSettings();
                    ToastAndroid.show(
                      "Manually give notification permission",
                      ToastAndroid.LONG
                    );
                  },
                },
              ]);
              setIsDialogOpened(true);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    dispatch(clearError(""));

    if (!isDialogOpened) {
      askPermission();
    }

    const state = AppState.addEventListener("focus", askPermission);

    return () => {
      state.remove();
    };
  }, []);

  React.useEffect(() => {
    if (isAuthenticated && type) {
      if (type === "user") {
        navigation.reset({
          index: 0,
          routes: [{ name: "user/home" }],
        });
      } else if (type === "technician") {
        navigation.reset({
          index: 0,
          routes: [{ name: "technician/home" }],
        });
      }
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "login" }],
      });
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;
