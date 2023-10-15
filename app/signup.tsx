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
import { clearError, login } from "../store/slices/auth";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { RegisterUser } from "../interfaces";
import { getError, getIsLoading } from "../store/selectors";

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
      keyboardShouldPersistTaps="handled"
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: "20%",
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
              <Ionicons
                style={styles.inputIcon}
                name="checkmark-circle"
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
              borderRadius: 15,
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
          <TouchableOpacity onPress={() => {}}></TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
            <Text style={{ color: "#CCC", marginHorizontal: 10 }}>Or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <TouchableOpacity>
              <FontAwesome name="facebook" size={30} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="google" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="apple" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <Button
        title="login user"
        onPress={() => {
          dispatch(
            login({
              user: {
                name: "test user",
                email: "testuser@email.com",
                phone: "765776574",
              },
              token: "sadasdasdasdasdasdr34r43r3r",
              type: "user",
            })
          );
        }}
      />

      <Button
        title="login technician"
        onPress={() => {
          dispatch(
            login({
              user: {
                name: "test technician",
                email: "testtechnician@email.com",
                phone: "765776574",
              },
              token: "sadasdasdasdasdasdr34r43r3r",
              type: "technician",
            })
          );
        }}
      /> */}
      </View>
    </ScrollView>
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
    borderRadius: 18,
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
