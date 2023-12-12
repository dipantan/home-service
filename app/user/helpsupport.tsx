import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const HelpSupport = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fdfdfd'}}>
<Header
title={'Help & Support'}/>

<ScrollView contentContainerStyle={styles.container}>
      

      <Text style={styles.sectionTitle}>FAQs</Text>

      <View style={styles.faqItem}>
        <Text style={styles.faqQuestion}>Q: How do I get started with the app?</Text>
        <Text style={styles.faqAnswer}>
          A: To begin, download the app from the App Store or Google Play Store. Once installed, open
          the app and follow the on-screen instructions to sign up or log in to your account.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.faqQuestion}>Q: I forgot my password. How can I reset it?</Text>
        <Text style={styles.faqAnswer}>
          A: If you've forgotten your password, you can reset it by selecting the 'Forgot Password'
          option on the login screen. Follow the prompts to reset your password via email.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.faqQuestion}>Q: What should I do if I encounter an issue with the app?</Text>
        <Text style={styles.faqAnswer}>
          A: If you encounter any issues while using the app, please try restarting the app or
          checking for any available updates. If the issue persists, contact our support team.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.contactInfo}>
        For any inquiries or assistance, please contact us at:{'\n\n'}
        Email: support@example.com{'\n'}
        Phone: +123456789{'\n\n'}
        Our support team is available from Monday to Friday, 9:00 AM - 6:00 PM (GMT).
      </Text>
    </ScrollView>

    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  faqItem: {
    marginBottom: 15,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 24,
  },
  contactInfo: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
});

export default HelpSupport;
