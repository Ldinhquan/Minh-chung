import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const image = { uri: "https://dulich3mien.vn/wp-content/uploads/2022/08/Canh-dep-Da-Lat-07.jpg" };

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.header}>
        <Text style={[styles.headerText, { fontStyle: 'italic' }]}>DaLat Travel</Text>

        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.logo}>Sign In</Text>
          <TextInput
            style={[styles.input,{color:"black"}]}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={[styles.input,{color:"black"}]}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#6565f2',
  },
  loginContainer: {
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color:"black"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
