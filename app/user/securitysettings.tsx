import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';

const SecuritySettingsPage = () => {
  const [biometricAuthEnabled, setBiometricAuthEnabled] = useState(false);
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);

  const toggleBiometricAuth = () => {
    // Logic to enable/disable biometric authentication
    setBiometricAuthEnabled((prevValue) => !prevValue);
  };

  const toggleTwoFactorAuth = () => {
    // Logic to enable/disable two-factor authentication
    setTwoFactorAuthEnabled((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      <Header
      title={'Security Settings'}
      />

      <View style={styles.setting}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Biometric Authentication</Text>
        <Switch
        trackColor={{ false: '#767577', true: Colors.primary }}
        thumbColor={biometricAuthEnabled ? Colors.primary : '#f4f3f4'}
          value={biometricAuthEnabled}
          onValueChange={toggleBiometricAuth}
        />
      </View>

      <View style={styles.setting}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Two-Factor Authentication</Text>
        <Switch
        trackColor={{ false: '#767577', true: Colors.primary }}
        thumbColor={twoFactorAuthEnabled ? Colors.primary : '#f4f3f4'}
          value={twoFactorAuthEnabled}
          onValueChange={toggleTwoFactorAuth}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fdfdfd'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding:20
  },
});

export default SecuritySettingsPage;
