import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import { useRouter } from 'expo-router';

const TermsAndCondition = () => {
    const router = useRouter();
  const term = [
    { 'id':1,
      "title": "Introduction",
      "content": "Welcome to our platform. By accessing or using our services, you agree to comply with and be bound by these terms and conditions. These terms govern your access to and use of the platform, including any content, functionality, and services offered. Please read these terms carefully before using the platform."
    },
    {'id':2,
      "title": "Account Registration",
      "content": "In order to use certain features of our platform, you may be required to create an account. By registering, you agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account."
    },
    {'id':3,
      "title": "User Conduct",
      "content": "By accessing our platform, you agree to use it only for lawful purposes and in a manner that does not infringe upon the rights of others, restrict or inhibit anyone else's use of the platform. You agree not to engage in any activity that disrupts or interferes with the operation of the platform or the servers and networks connected to it."
    },
    {
      'id':4,
      "title": "Intellectual Property",
      "content": "All content and materials available on our platform, including but not limited to text, graphics, logos, button icons, images, audio clips, and software, are the property of our platform or its content suppliers and are protected by copyright laws and other intellectual property laws."
    },
    {
      'id':5,
      "title": "Privacy Policy",
      "content": "Your use of our platform is also governed by our Privacy Policy. We respect your privacy and are committed to protecting it. Our Privacy Policy outlines how we collect, use, disclose, and manage your information. By using our platform, you consent to our Privacy Policy and agree to its terms."
    },
    {
      'id':6,
      "title": "Termination",
      "content": "We reserve the right to terminate or suspend your access to our platform at our discretion, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these terms and conditions. Upon termination, your right to use the platform will immediately cease."
    }
    // Add more sections as needed
  ]

  const renderPolicyItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.id+'. '+item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <Header
         title={'Tearms & Conditions'}
      
         />
         <View style={{paddingHorizontal:20,flex:1}}>
         <FlatList
         showsVerticalScrollIndicator={false}
        data={term}
        renderItem={renderPolicyItem}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
         </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },
  flatlist: {
    flexGrow: 1,
  },
  itemContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  content: {
    fontSize: 16,
  },
});

export default TermsAndCondition;
