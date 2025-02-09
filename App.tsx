import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './src/components/Navbar';
import SplashScreen from './src/screens/SplashScreen';

const App: React.FC = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  if (isSplashVisible) {
    return <SplashScreen onFinish={() => setSplashVisible(false)} />;
  }

  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
};

export default App;
