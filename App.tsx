import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './src/components/Navbar';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/components/Login';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  if (isSplashVisible) {
    return <SplashScreen onFinish={() => setSplashVisible(false)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="MainApp" component={Navbar} />
        ) : (
          <Stack.Screen name="Login">
            {() => <Login onLogin={() => setAuthenticated(true)} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
