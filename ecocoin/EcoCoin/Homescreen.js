import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const HomeScreen = () => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    if (result.type === 'success') {
      // Handle the selected video file
      handleVideoUpload(result.uri);
    }
  };

  const handleVideoUpload = async (videoUri) => {
    // Upload video file to S3
    // Delete video file from phone
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
        <Button title="Upload Video" onPress={pickDocument} color="darkgreen" />
        <View style={styles.buttonSpacer} />
        <Button title="Upload Photo" onPress={() => { /* Logic for uploading photo */ }} color="darkgreen" />
        <View style={styles.buttonSpacer} />
        <Button title="View My EcoCoin Balance" onPress={() => { /* Logic to navigate to balance screen */ }} color="darkgreen" />
        <View style={styles.buttonSpacer} />
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
  buttonSpacer: {
    marginVertical: 10,
  },
});

export default HomeScreen;

