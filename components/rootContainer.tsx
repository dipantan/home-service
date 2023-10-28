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
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
// import RNExitApp from "react-native-exit-app";

import { getIsAuthenticated } from "../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "expo-router";
import { clearError } from "../store/slices/auth";
import state from "../store";
import { setStatus } from "../store/slices/network";

const Container: JSX.Element = ({ children }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const { user, firstTime } = state.getState().auth;

  function askPermission() {
    if (Platform.OS === "android") {
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
  }

  React.useEffect(() => {
    dispatch(clearError(""));
    if (!isDialogOpened) {
      askPermission();
    }

    const state = AppState.addEventListener("focus", askPermission);

    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      dispatch(
        setStatus({
          isConnected: state.isConnected || false,
          type: state.type,
          isInternetReachable: state.isInternetReachable || false,
        })
      );
    });

    return () => {
      state.remove();
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    if (isAuthenticated && user?.type) {
      if (user?.type === "user") {
        navigation.reset({
          index: 0,
          routes: [{ name: "user/home" }],
        });
      } else if (user?.type === "technician") {
        navigation.reset({
          index: 0,
          routes: [{ name: "technician/home" }],
        });
      }
    } else if (!firstTime) {
      navigation.reset({
        index: 0,
        routes: [{ name: "login" }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "landing" }],
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
