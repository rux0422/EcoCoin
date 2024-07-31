import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const RedeemCoinsscreen = () => {
  const coinValueInRupees = 2; // Value of each coin in rupees
  const [numberOfCoins, setNumberOfCoins] = useState('');
  const amountValue = numberOfCoins ? parseInt(numberOfCoins) * coinValueInRupees : '';

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
          <Text style={styles.coinBalance}>{numberOfCoins}</Text>
        </View>
        <Text style={styles.coinValue}>Amount value: ₹{amountValue}</Text>
        <Text style={styles.howManyCoins}>How many coins?</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          onChangeText={(text) => setNumberOfCoins(text)}
          keyboardType="numeric"
        />
        <Button title="Redeem Now" onPress={() => { /* Logic to redeem coins */ }} color="darkgreen" />
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
  coinStackImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  coinBalance: {
    fontSize: 24,
    color: 'white',
    marginLeft: 5,
  },
  coinValue: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  leafIcon: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  howManyCoins: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
});

export default RedeemCoinsscreen;
