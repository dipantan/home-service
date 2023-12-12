import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import { useRouter } from 'expo-router';

const PrivacyPolicyPage = () => {
    const router = useRouter();
  const policyData = [
    { "id":1,
      "sectionTitle": "Information We Collect",
      "content": "We collect information you provide directly to us, such as when you create an account or make a booking. This may include your name, email, address, and payment information."
    },
    {
        "id":2,
      "sectionTitle": "How We Use Your Information",
      "content": "We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about your bookings, updates, and promotional offers."
    },
    { "id":3,
      "sectionTitle": "Information Sharing and Disclosure",
      "content": "We do not sell, rent, or share your personal information with third parties except as described in this Privacy Policy. We may share your information with service providers or law enforcement when required."
    },
    { "id":4,
      "sectionTitle": "Data Security",
      "content": "We take reasonable measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    { "id":5,
      "sectionTitle": "Changes to This Privacy Policy",
      "content": "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    },
    { "id":6,
      "sectionTitle": "Contact Us",
      "content": "If you have any questions or concerns about our Privacy Policy, please contact us at privacy@example.com."
    }
  ];

  const renderPolicyItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.id+'. '+item.sectionTitle}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <Header
         title={'Privacy Policy'}
      
         />
         <View style={{paddingHorizontal:20,flex:1}}>
         <FlatList
         showsVerticalScrollIndicator={false}
        data={policyData}
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
    
    backgroundColor: '#fdfdfd',
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

export default PrivacyPolicyPage;
