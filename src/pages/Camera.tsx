import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';

// import { Container } from './styles';

const CameraFC: React.FC = () => {
  return (
    <View style={{ flex: 1}}>
        <Camera style={{ flex: 1}} />
    </View>
  );
}

export default CameraFC;