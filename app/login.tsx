import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../store/slices/auth";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link, useNavigation } from "expo-router";
import { getError, getIsLoading } from "../store/selectors";
import { ScrollView } from "react-native-gesture-handler";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !pass) {
      return;
    }
    dispatch(
      login({
        username: email,
        password: pass,
      })
    );
  };

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error?.message, ToastAndroid.SHORT);
      dispatch(clearError(""));
    }
  }, [error]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: "4%",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
       <Link asChild href={"/technician/signup"}>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          marginEnd: "4%",
        }}
      >
        <Text>Register as technician</Text>
      </TouchableOpacity>
      </Link>

      <Image
      source={require('../assets/images/login.png')}
      resizeMode="cover"
      style={{height:180,width:170,alignSelf:'center',marginTop:10}}
      />

      <View
        style={{
          marginTop: "3%",
        }}
      >
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24 }}>
          Welcome Back!
        </Text>
        <Text
          style={{ alignSelf: "center", fontWeight: "normal", fontSize: 15 }}
        >
          Please enter your log in details below
        </Text>

        <View style={{ marginTop: 20 }}>
          <View style={{ marginTop: 10 }}>
            <View style={styles.inputContainer}>
              <TextInput
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                placeholder="Email"
                style={styles.inputfild}
              />
              <Entypo
                style={styles.inputIcon}
                name="email"
                size={17}
                color="green"
              />
            </View>
            <Text style={styles.errTextStyle}>{}</Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <View style={styles.inputContainer}>
              <TextInput
                value={pass}
                onChangeText={(pas) => setPass(pas)}
                placeholder="Password"
                secureTextEntry
                style={styles.inputfild}
              />
              {/* eye / eye-off */}
              <FontAwesome
                style={styles.inputIcon}
                name="eye"
                size={17}
                color="green"
              />
            </View>
          </View>

          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => {}}
          >
            <Text style={{ color: "#555", marginTop: 10 }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: Colors.light.tint,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
              borderRadius: 12,
            }}
            disabled={!email || !pass}
            onPress={handleLogin}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text
                style={{ fontWeight: "normal", fontSize: 20, color: "#fff" }}
              >
                Sign In
              </Text>
            )}
          </TouchableOpacity>

          <Text style={{ color: "#555", marginTop: 20, alignSelf: "center" }}>
            Don't have an account ?
            <Text
              onPress={() => {
                navigation.navigate("user/signup");
              }}
              style={{ color: Colors.light.tint, marginTop: 10 }}
            >
              {" "}
              Sign up
            </Text>
          </Text>

        

        </View>
      </View>

    </ScrollView>
     
    </View>
  );
};

export default Login;

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
  errTextStyle: {
    color: Colors.light.red,
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
