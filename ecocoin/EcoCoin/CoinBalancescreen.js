import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const CoinBalance = () => {
  const coinBalance = 10; // Example coin balance
  const coinValueInRupees = coinBalance * 2; // Example value of each coin in rupees

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
        <View style={styles.coinContainer}>
           <Image source={require('./image.png')} style={styles.coinStackImage} />
         
          <Text style={styles.coinBalance}>{coinBalance}</Text>
          
        </View>
        <Text style={styles.coinValue}>Amount value: ₹{coinValueInRupees}</Text>
        <Button title="Redeem EcoCoins" onPress={() => { /* Logic to navigate to redeem screen */ }} color="darkgreen" />
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
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  coinImage: {
    width:30,
    height: 30,
    marginLeft: 5,
  },
  coinBalance: {
    fontSize: 24,
    color: 'white',
    marginLeft: 5,
  },
  coinValue: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  leafIcon: {
    marginBottom: 10,
  },
  
  buttonSpacer: {
    marginVertical: 10,
  },
});

export default CoinBalance;

