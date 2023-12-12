import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const AboutUs = () => {
  return (
    <View style={{flex:1}}>
        <Header
        title={'About Us'}
        />
<ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Our App</Text>
      <Text style={styles.description}>
        Welcome to our app! We aim to revolutionize how people interact with [specific field or industry].
        Our mission is to provide a seamless experience by offering innovative solutions.
      </Text>
      <Text style={styles.featuresTitle}>Key Features:</Text>
      <View style={styles.featureItem}>
        <Text style={styles.featureText}>- Feature 1 description goes here.</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.featureText}>- Feature 2 description goes here.</Text>
      </View>
      <View style={styles.featureItem}>
        <Text style={styles.featureText}>- Feature 3 description goes here.</Text>
      </View>
      <Text style={styles.teamInfo}>
        Our dedicated team comprises passionate individuals who strive for excellence in
        delivering top-notch solutions.
      </Text>
      <Text style={styles.contactInfo}>
        Contact Us: Email: info@example.com | Phone: +123456789
      </Text>
    </ScrollView>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 10,
  },
  teamInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  contactInfo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
});

export default AboutUs;
