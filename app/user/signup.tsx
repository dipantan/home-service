import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../store/slices/auth";
import { Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { RegisterUser } from "../../interfaces";
import { getError, getIsLoading } from "../../store/selectors";

const Signup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [eye, setEye] = useState(true);
  const [data, setData] = useState<RegisterUser>({
    email: "",
    name: "",
    password: "",
    phone: "",
    type: "register",
  });
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);

  function register(_event: GestureResponderEvent): void {
    dispatch(login(data));
  }

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error?.message, ToastAndroid.SHORT);
      dispatch(clearError(""));
    }
  }, [error]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: "4%",
        }}
      >
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24 }}>
          Welcome Back!
        </Text>
        <Text
          style={{ alignSelf: "center", fontWeight: "normal", fontSize: 15 }}
        >
          Please register your log in details below
        </Text>

        <View style={{ width: "80%", marginTop: 40 }}>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>Username</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="John Smith"
                style={styles.inputfild}
                value={data.name}
                onChangeText={(text) =>
                  setData((prev) => {
                    return {
                      ...prev,
                      name: text,
                    };
                  })
                }
              />
              <Ionicons
                style={styles.inputIcon}
                name="person"
                size={17}
                color="green"
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="jonh@exmaple.com"
                style={styles.inputfild}
                value={data.email}
                keyboardType="email-address"
                onChangeText={(text) =>
                  setData((prev) => {
                    return {
                      ...prev,
                      email: text,
                    };
                  })
                }
              />
              <Entypo
                style={styles.inputIcon}
                name="email"
                size={17}
                color="green"
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>Phone</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="9800XXXXXX"
                maxLength={10}
                keyboardType="phone-pad"
                style={styles.inputfild}
                value={data.phone}
                onChangeText={(text) =>
                  setData((prev) => {
                    return {
                      ...prev,
                      phone: text,
                    };
                  })
                }
              />
              <Feather
                style={styles.inputIcon}
                name="phone"
                size={17}
                color="green"
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder=""
                secureTextEntry={eye}
                style={styles.inputfild}
                value={data.password}
                onChangeText={(text) =>
                  setData((prev) => {
                    return {
                      ...prev,
                      password: text,
                    };
                  })
                }
              />
              {/* eye / eye-off */}
              <FontAwesome
                style={styles.inputIcon}
                name={eye ? "eye" : "eye-slash"}
                size={17}
                color="green"
                onPress={() => setEye((prev) => !prev)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              height: 50,
              width: "90%",
              backgroundColor: Colors.light.tint,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              borderRadius: 8,
            }}
            onPress={register}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text
                style={{ fontWeight: "normal", fontSize: 20, color: "#fff" }}
              >
                Register
              </Text>
            )}
          </TouchableOpacity>

          <Text style={{ color: "#555", marginTop: 20, alignSelf: "center" }}>
            Already have an account ?
            <Text
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "login" }],
                });
              }}
              style={{ color: Colors.light.tint, marginTop: 10 }}
            >
              {" "}
              Sign in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    rowGap: 16,
    padding: 16,
  },
  social: {
    borderRadius: 20,
    size: 30,
    padding: 5,
    margin: 8,
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1.5,
    height: 50,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputIcon: {
    marginRight: 20,
  },
  inputfild: {
    paddingLeft: 16,
    height: 50,
    borderColor: "#ccc",
    width: "80%",
  },
  inputfildLabel: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
