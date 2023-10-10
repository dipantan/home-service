import { Button, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth";
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const Signup = () => {
  const handleSignup = () => {
    
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
    
      <View
      
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff',marginTop:'20%' }}
    >
      <Text style={{alignSelf:'center',fontWeight:'bold',fontSize: 24,}}>Welcome Back!</Text>
      <Text style={{alignSelf:'center',fontWeight:'normal',fontSize: 15,}}>Please register your log in details below</Text>


      <View style={{ width: '80%',marginTop:40}}>
      <View style={{marginTop:15}}>
        <Text style={styles.inputfildLabel}>User Name</Text>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.inputfild}
        />
        <Ionicons style={styles.inputIcon} name="person" size={17} color="green" />
        </View>
       
        </View>
       
        <View style={{marginTop:15}}>
        <Text style={styles.inputfildLabel}>Email</Text>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.inputfild}
        />
        <Ionicons style={styles.inputIcon} name="checkmark-circle" size={17} color="green" />
        </View>
       
        </View>
        <View style={{marginTop:15}}>
        <Text style={styles.inputfildLabel}>Password</Text>
        <View style={styles.inputContainer}> 
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.inputfild}
        />
        {/* eye / eye-off */}
        <FontAwesome style={styles.inputIcon} name="eye" size={17} color="#000" />
        </View>
       
        </View>
        <View style={{marginTop:15}}>
        <Text style={styles.inputfildLabel}>Confirm Password</Text>
        <View style={styles.inputContainer}> 
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.inputfild}
        />
        {/* eye / eye-off */}
        <FontAwesome style={styles.inputIcon} name="eye" size={17} color="#000" />
        </View>
       
        </View>
        
       
        <TouchableOpacity style={{height:50,width:'90%',backgroundColor:Colors.light.tint,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:30,borderRadius:15}} onPress={() => {/* Handle login logic */}} >
          <Text style={{fontWeight:'normal',fontSize:20,color:'#fff'}}>Sign Up</Text>
          </TouchableOpacity>  

        

        <Text style={{ color: '#555', marginTop: 20,alignSelf:'center' }}>Already have an account ?<Text onPress={()=>{
           navigation.reset({
            index: 0,
            routes: [{ name: "login" }],
          });
        }} style={{ color: Colors.light.tint, marginTop: 10, }}> Sign in</Text></Text>
        <TouchableOpacity onPress={() => {}}>
          
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
          <Text style={{ color: '#CCC', marginHorizontal: 10 }}>Or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
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
  social :{
   borderRadius:20,
   size:30,
   padding:5,
   margin:8,
   alignSelf:'center'
  },
  inputContainer:{
    backgroundColor: 'white',  borderRadius:18,borderWidth:1.5,height:50,borderColor:'#ccc',flexDirection:'row',alignItems:'center',justifyContent:'space-between'
  },
  inputIcon:{
    marginRight:20
  }
  ,
  inputfild :{
    paddingLeft:16,height:50,borderColor:'#ccc',width:'80%'
  },inputfildLabel:{
    fontSize: 16, marginBottom: 10, fontWeight:'bold'
  }
});
