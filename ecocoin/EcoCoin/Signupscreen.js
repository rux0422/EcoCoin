import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { S3 } from 'aws-sdk';
import { Ionicons } from '@expo/vector-icons';

const s3 = new S3({
  region: 'YOUR_REGION',
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});

const Signupscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUri, setPhotoUri] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUri(result.uri);
    }
  };

  const handleSignup = async () => {
    if (!photoUri || !photoUri.startsWith('file://')) {
      Alert.alert('Error', 'Please select a valid image file.');
      return;
    }

    const fileType = photoUri.split('.').pop();
    if (fileType !== 'jpg' && fileType !== 'png') {
      Alert.alert('Error', 'Please select a JPG or PNG image file.');
      return;
    }

    const fileContent = await FileSystem.readAsStringAsync(photoUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const params = {
      Bucket: 'YOUR_S3_BUCKET_NAME',
      Key: `profile/${email}.${fileType}`,
      Body: fileContent,
      ContentType: `image/${fileType}`,
    };

    try {
      await s3.putObject(params).promise();
      // Upload successful, continue with signup process
      // Call Cognito signup API with email, password, mobile number, UPI ID, and roll number
    } catch (error) {
      console.error('Error uploading photo:', error);
      Alert.alert('Error', 'Failed to upload photo. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/4042621/pexels-photo-4042621.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Ionicons name="leaf" size={32} color="white" style={styles.leafIcon} />
        <Text style={styles.heading}>EcoCoin</Text>
        <Text style={styles.subHeading}>An incentivised way to go GREEN!!</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          placeholderTextColor="white"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="white"
          secureTextEntry
        />
        <Text style={styles.label}>Roll Number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setRollNumber}
          value={rollNumber}
          placeholder="Enter your roll number"
          placeholderTextColor="white"
        />
        {photoUri && <Image source={{ uri: photoUri }} style={{ width: 200, height: 200 }} />}
        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMobileNumber}
          value={mobileNumber}
          placeholder="Enter your mobile number"
          placeholderTextColor="white"
          keyboardType="phone-pad"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subHeading: {
    fontSize: 12,
    color: 'white',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // white with opacity
    alignSelf: 'stretch',
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'darkgreen',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  leafIcon: {
    marginRight: 10,
  },
});

export default Signupscreen;



