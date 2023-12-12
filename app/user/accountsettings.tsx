import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../../components/Header';
import DateTimePicker from '@react-native-community/datetimepicker';


const AccoutSettings = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState(new Date());
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const handleSaveProfile = () => {
        // Implement save profile functionality here
        // For example: dispatch action to save profile details
        console.log('Save Profile pressed');
    };
    const showDatepicker = () => {
        setShowDatePicker(true);
      };
      const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(Platform.OS === 'ios');
        setDob(currentDate);
      };

    return (
        <View style={{ flex: 1,backgroundColor:'#fdfdfd' }}>
            <Header
                title={'Account Settings'} />
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TouchableOpacity style={styles.input} onPress={showDatepicker}>
                    <Text>Date of Birth: {dob.toDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dob}
                        mode="date"
                        display="default"
                        
                        onChange={onChangeDate}
                    />
                )}

                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={(text) => setMobileNumber(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    multiline
                    numberOfLines={3}
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <View style={styles.pickerContainer}>
                   
                    <RNPickerSelect
                        
                        placeholder={{ label: 'Select Gender', value: null }}
                        onValueChange={(value) => setGender(value)}
                        items={[
                            { label: 'Male', value: 'male' },
                            { label: 'Female', value: 'female' },
                            { label: 'Other', value: 'other' },
                        ]}
                        style={pickerSelectStyles}
                    />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
                    <Text style={styles.saveButtonText}>Update Profile</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 12,
        color: 'black',
        paddingRight: 30,
        backgroundColor:'#fdfdfd',
        
    },
});

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20


    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        justifyContent:'center',
        backgroundColor:'#fdfdfd'
    },
    pickerContainer: {
        width: '100%',
        marginBottom: 10,
    },
    pickerLabel: {
        marginBottom: 5,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AccoutSettings;
