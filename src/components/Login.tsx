import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from '../styles/ScreenStyles';
import axios, { AxiosError } from 'axios';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Fehler', 'Benutzername und Passwort dürfen nicht leer sein.');
      return;
    }

    try {
      const response = await axios.post(
        'http://10.0.2.2:4000/login',
        { username: username.trim(), password: password.trim() },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.data.success) {
        console.log('Login erfolgreich:', response.data.user);
        Alert.alert('Erfolgreich!', `Willkommen ${response.data.user.username}`);
        onLogin();
      } else {
        Alert.alert('Fehler', response.data.message || 'Unbekannter Fehler.');
      }
    } catch (error: any) {
      console.log('Login-Fehler:', error);  // Ändere console.error zu console.log
    
      if (error.response?.status === 400) {
        Alert.alert('Fehler', 'Benutzername oder Passwort ist falsch.');
      } else {
        const message = error.response?.data?.message || 'Es ist ein Problem aufgetreten. Bitte versuche es erneut.';
        Alert.alert('Fehler', message);
      }
    }    
  };

  return (
    <ImageBackground
      source={require('../assets/Social_Cleaned_Proper.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>SocialDates</Text>
        <Text style={styles.subtitle}>Dates mit Herz für die Gemeinschaft.</Text>
        <TextInput
          placeholder="Benutzername"
          value={username}
          onChangeText={setUsername}
          style={styles.inputLogin}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Passwort"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputLogin}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Anmelden</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Noch nicht implementiert')}>
          <Text style={styles.buttonText}>Registrieren</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
