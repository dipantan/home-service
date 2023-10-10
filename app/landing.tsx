import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "expo-router";
const landing = () => {
  const navigation = useNavigation();

  const slides = [
    {
      title: 'Welcome to MyApp',
      text: 'A fantastic app for all your needs.',
      image: 'https://dummyimage.com/300',
    },
    {
      title: 'Get Started',
      text: 'Swipe left to explore more!',
      image: 'https://dummyimage.com/300',
    },
    {
      title: 'Enjoy!',
      text: 'Start using our app and have fun!',
      image: 'https://dummyimage.com/300',
    },
  ];
  
  return (
    
      
       <Swiper
      loop={false}
      showsPagination={true}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      {slides.map((slide, index) => (
        <View style={styles.slide} key={index}>
          <Image source={{uri:slides.image}} style={styles.image} />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.text}>{slide.text}</Text>
          {
            <TouchableOpacity onPress={()=>{
              navigation.reset({
                index: 0,
                routes: [{ name: "login" }],
              });
            }} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
            <Icon name="arrow-right" size={20} color="white" />
          </TouchableOpacity>

          }

        </View>
      ))}
    </Swiper>
    
  )
}



const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 40,
    textAlign: 'center',
    marginTop: 10,
  },
  dot: {
    backgroundColor: '#ccc',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.tint, // Button background color
    padding: 10,
    borderRadius: 5,
    position:'absolute',
    bottom:60
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
     marginHorizontal: 10,
  },
})
export default landing