import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Header from '../../components/Header';

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
          value={biometricAuthEnabled}
          onValueChange={toggleBiometricAuth}
        />
      </View>

      <View style={styles.setting}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Two-Factor Authentication</Text>
        <Switch
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
