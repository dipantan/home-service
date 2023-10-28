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
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../store/slices/auth";
import {
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import Colors from "../../constants/Colors";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { RegisterTechnician } from "../../interfaces";
import { getError, getIsLoading } from "../../store/selectors";
import { instance } from "../../helper";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";

const Signup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [eye, setEye] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RegisterTechnician>({
    name: "",
    email: "",
    phone: "",
    password: "",
    category: "",
    experience: "",
    speciality: "",
    lat: "",
    long: "",
    type: "tech-register",
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);

  function register(_event: GestureResponderEvent): void {
    dispatch(login(data));
  }

  const getUserLocation = async () => {
    try {
      const permission = await Location.getForegroundPermissionsAsync();
      if (permission.granted) {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.LocationAccuracy.Highest,
          mayShowUserSettingsDialog: true,
        });
        setData((prev) => {
          return {
            ...prev,
            lat: location.coords.latitude.toString(),
            long: location.coords.longitude.toString(),
          };
        });
      } else {
        // ask permission
        await Location.requestForegroundPermissionsAsync();
        await getUserLocation();
      }
    } catch (err) {
      ToastAndroid.show("Please give location permission", ToastAndroid.SHORT);
      navigation.goBack();
    }
  };

  const getAllCategory = async () => {
    setIsLoading(true);
    try {
      const req = await instance.get("/services");
      setCategories(req.data?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const getSubCategories = async () => {
    try {
      setIsLoading(true);
      const req = await instance.get(`/services?category=${data.category}`);
      setSubCategories(req.data?.data);
      setData((prev) => {
        return {
          ...prev,
          speciality: req.data?.data[0],
        };
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
    getAllCategory();
  }, []);

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error?.message, ToastAndroid.SHORT);
      dispatch(clearError(""));
    }
  }, [error]);

  useEffect(() => {
    if (data.category) {
      getSubCategories();
    }
  }, [data.category]);

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
          marginVertical: responsiveScreenHeight(2),
        }}
      >
        {isLoading && (
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              top: responsiveHeight(50),
            }}
          >
            <ActivityIndicator size={"large"} />
          </View>
        )}

        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 24 }}>
          Welcome Back!
        </Text>
        <Text
          style={{ alignSelf: "center", fontWeight: "normal", fontSize: 15 }}
        >
          Please register your log in details below
        </Text>

        <View style={{ marginTop: 40 }}>
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
                keyboardType="number-pad"
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

          {/* category picker*/}
          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>Category</Text>
            <Picker
              selectedValue={data.category}
              onValueChange={(itemValue, itemIndex) => {
                setData((prev) => {
                  return {
                    ...prev,
                    category: itemValue,
                  };
                });
              }}
              style={styles.inputContainer}
              mode="dropdown"
            >
              {categories.map((item) => {
                return (
                  <Picker.Item
                    style={{
                      textTransform: "capitalize",
                    }}
                    key={item}
                    label={item}
                    value={item}
                  />
                );
              })}
            </Picker>
          </View>

          {/* sub-category picker*/}
          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>Speciality</Text>
            <Picker
              selectedValue={data.speciality}
              onValueChange={(itemValue, itemIndex) => {
                setData((prev) => {
                  return {
                    ...prev,
                    speciality: itemValue,
                  };
                });
              }}
              style={styles.inputContainer}
              mode="dropdown"
            >
              {subCategories.length > 0 ? (
                subCategories.map((item) => {
                  return (
                    <Picker.Item
                      style={{
                        textTransform: "capitalize",
                      }}
                      key={item}
                      label={item}
                      value={item}
                    />
                  );
                })
              ) : (
                <Picker.Item
                  style={{
                    textTransform: "capitalize",
                  }}
                  label={"Select a category"}
                  value={"Select a category"}
                />
              )}
            </Picker>
          </View>

          {/* experience */}
          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputfildLabel}>
              Experience
              <Text style={{ fontSize: responsiveFontSize(1.2) }}>
                {" "}
                (in years)
              </Text>
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="5"
                secureTextEntry={eye}
                style={styles.inputfild}
                value={data.password}
                keyboardType="number-pad"
                onChangeText={(text) =>
                  setData((prev) => {
                    return {
                      ...prev,
                      password: text,
                    };
                  })
                }
              />
              <MaterialCommunityIcons
                name="account-star-outline"
                style={styles.inputIcon}
                size={17}
                color="green"
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: Colors.light.tint,
              alignItems: "center",
              justifyContent: "center",
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
    rowGap: responsiveHeight(4),
    padding: responsiveWidth(4),
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
    elevation: 5,
    height: responsiveHeight(6),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputIcon: {
    marginRight: 20,
  },
  inputfild: {
    paddingLeft: responsiveWidth(3),
    borderColor: "#ccc",
    width: responsiveWidth(80),
  },
  inputfildLabel: {
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(1.2),
    fontWeight: "bold",
  },
});
