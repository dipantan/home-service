import { Button, StyleSheet, Text, View, ScrollView, Pressable, Dimensions, StatusBar, Image,TextInput } from "react-native";
import React, { useState } from "react";
import { logout } from "../../../store/slices/auth";
import { useDispatch } from "react-redux";
import { Ionicons, Fontisto, Entypo, Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../../constants/Colors";

const ts = Dimensions.get('window').width / 100;
const profile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [isEnabled, setisenabled] = React.useState(false);
  const [liveText, setTextLive] = React.useState('Offline');
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState(""); //number
  const [about, setAbout] = React.useState("");    //description
  const [qualification, setQualification] = React.useState("");  //degree

  const [address, setAddress] = React.useState("");  //address
  const [consult, setConsult] = React.useState("");  //fees
  const [desc, setDesc] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  return (

    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <StatusBar
          backgroundColor={Colors.light.tint}
          barStyle="light-content"
        />

        <View
        >
          {/* <Loader visibl={isLoading} /> */}

          <LinearGradient
            // Background Linear Gradient
            colors={[Colors.light.tint, 'tomato']}
            style={styles.background}
          >
            <Text style={{
              fontFamily: 'novaBold',
              fontSize: ts * 5,
              color: '#fff',
              alignSelf: 'center',
              marginTop: ts * 4


            }}>Personal Details</Text>

          </LinearGradient >

          <View style={{ height: ts * 27, backgroundColor: 'tomato', marginTop: -ts, width: '50%' }} />
          <View style={{ height: ts * 27, backgroundColor: '#f2f2f2', marginTop: -ts * 26, width: '80%', borderTopLeftRadius: ts * 50 }} />
          <View
            style={{
              marginTop: - ts * 20,
              // flexDirection: 'row',
              backgroundColor: 'transparent',
              alignItems: 'center',
              alignSelf: 'center',

            }}
          >
            <Pressable
              onPress={() => { }}

              style={{ backgroundColor: '#eee', elevation: 10, width: ts * 30, height: ts * 30, alignSelf: 'center', borderRadius: ts * 30, borderWidth: 3, borderColor: '#fff', justifyContent: 'center', alignItems: 'center', marginTop: -ts * 22 }}
            >
              {image &&
                <Image

                  source={{ uri: image }}
                  style={{ width: ts * 28, height: ts * 28, borderRadius: ts * 28, }} />}

              <Feather name="camera"

                size={ts * 6}
                color="#63368a" style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  bottom: -ts * 4.5,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  padding: ts * 2,
                  opacity: .8,
                }}
              />
            </Pressable>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -ts * 7 }}>

              <Feather name="home" size={ts * 5} color="#63368a" style={{ padding: ts * 2.5, backgroundColor: '#fff', borderRadius: ts * 5, marginRight: ts * 20, elevation: ts * 4 }} />
              <FontAwesome5 onPress={() => { }} name="share" size={ts * 5} color="#63368a" style={{ padding: ts * 2.5, backgroundColor: '#fff', borderRadius: ts * 5, marginLeft: ts * 20, elevation: ts * 4 }} />


            </View>

            <View style={{ marginTop: 15 }}>
              <Text style={styles.inputfildLabel}>Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={name}
                  onChangeText={(tex) => setName(tex)}
                  placeholder="Your Name"
                  
                  style={styles.inputfild}
                />
                {/* eye / eye-off */}
                <FontAwesome
                  style={styles.inputIcon}
                  name="user"
                  size={17}
                  color="#000"
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.inputfildLabel}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={email}
                  onChangeText={(tex) => setEmail(tex)}
                  placeholder="Email"
                  
                  style={styles.inputfild}
                />
                {/* eye / eye-off */}
                <Feather
                  style={styles.inputIcon}
                  name="mail"
                  size={17}
                  color="#000"
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.inputfildLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={pass}
                  onChangeText={(tex) => setPass(tex)}
                  placeholder="Password"
                  secureTextEntry
                  style={styles.inputfild}
                />
                {/* eye / eye-off */}
                <FontAwesome
                  style={styles.inputIcon}
                  name="lock"
                  size={17}
                  color="#000"
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.inputfildLabel}>Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={address}
                  onChangeText={(tex) => setAddress(tex)}
                  placeholder="Full Address"
                  multiline={true}
                  numberOfLines={2}
                 
                  style={styles.inputfild}
                />
                {/* eye / eye-off */}
                <FontAwesome
                  style={styles.inputIcon}
                  name="map"
                  size={17}
                  color="#000"
                />
              </View>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.inputfildLabel}>Mobile</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={mobile}
                  onChangeText={(tex) => setMobile(tex)}
                  placeholder="Mobile Number"
                  
                  style={styles.inputfild}
                />
                {/* eye / eye-off */}
                <FontAwesome
                  style={styles.inputIcon}
                  name="phone"
                  size={17}
                  color="#000"
                />
              </View>
            </View>
            
         

          </View>



          <Pressable onPress={() => { }}>
            <LinearGradient
              // Background Linear Gradient
              colors={[Colors.light.tint, 'tomato']}
              style={{
                height: ts * 13,
                flexDirection: 'row',
                backgroundColor: '#63368a',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: ts * 4,
                marginBottom: ts * 4,
                borderRadius: ts * 34,
              }}
            >
              <Text style={{
                fontFamily: 'novaBold',
                fontSize: ts * 4,
                color: '#fff',
                alignSelf: 'center',


              }}>LOG OUT </Text>
              <Entypo name="log-out" size={ts * 5} style={{}} color="#fff" />


            </LinearGradient>
          </Pressable>




        </View>



      </View>
    </ScrollView>



  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  background: {
    height: ts * 30,
    backgroundColor: '#63368a',
    // borderBottomLeftRadius: ts * 34,
    borderBottomRightRadius: ts * 18,
    // paddingBottom: ts * ,
  }, inputContainer: {
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
  }, inputfildLabel: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  }, inputfild: {
    paddingLeft: 16,
    height: 50,
    borderColor: "#ccc",
    width: "80%",
  },

});
