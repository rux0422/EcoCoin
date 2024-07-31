import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoinsRedeemedScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/4042621/pexels-photo-4042621.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Ionicons name="leaf" size={32} color="white" style={styles.leafIcon} />
        <Text style={styles.heading}>EcoCoin</Text>
        <Text style={styles.subHeading}>An incentivised way to go GREEN!!</Text>
        <Image
          source={require('./image1.png')}
          style={styles.confettiImage}
          resizeMode="contain"
        />
        <Text style={styles.message}>5 coins (₹10 rupees) successfully redeemed!</Text>
        <Image
          source={require('./image2.png')}
          style={styles.confettiImage}
          resizeMode="contain"
        />
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
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 12,
    color: 'white',
    marginBottom: 20,
  },
  message: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  confettiImage: {
    width: 200,
    height: 200,
  },
  leafIcon: {
    marginBottom: 10,
  },
});

export default CoinsRedeemedScreen;
