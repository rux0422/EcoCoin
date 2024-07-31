import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/4042621/pexels-photo-4042621.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerFluid}>
          <View style={styles.row}>
            <View style={styles.imageContainer}>
              <Ionicons name="leaf" size={32} color="white" />
              <Text style={styles.heading}>EcoCoin</Text>
              <Text style={styles.subHeading}>An incentivised way to go GREEN!!</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.divider}>
                <Text style={styles.dividerText}></Text>
              </View>
              <View style={styles.form}>
                <Text style={[styles.inputLabel, { color: 'white' }]}>Email:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                
                />
                <Text style={[styles.inputLabel, { color: 'white' }]}>Password:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  secureTextEntry
                  placeholderTextColor="white"
           
                />
                <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={[styles.registerText, { color: 'white' }]}>Don't have an account? <Text style={[styles.registerLink, { color: 'white' }]}>Register</Text></Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingBottom: 20,
  },
  containerFluid: {
    width: '100%',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 12,
    color: 'white',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerText: {
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: 'white',
  },
  form: {
    marginBottom: 20,
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
  },
  inputLabel: {
    color: 'white',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  registerLink: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
