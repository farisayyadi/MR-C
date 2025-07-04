import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import CameraScreen from './components/CameraScreen';
import HomeScreen from './components/HomeScreen';

const App = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const handleScanPress = async () => {
    if (!permission) {
      return;
    }
    if (!permission.granted) {
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert('No access to camera', 'Please enable camera permissions in settings');
        return;
      }
    }
    setShowCamera(true);
  };

  const handleCloseCamera = () => {
    setShowCamera(false);
    setScannedData(null);
  };

  const handleBarcodeScanned = ({ type, data }) => {
    setScannedData(data);
    Alert.alert(
      'QR Code Scanned',
      `Type: ${type}\nData: ${data}`,
      [
        { text: 'Scan Again', onPress: () => setScannedData(null) },
        { text: 'Close', onPress: handleCloseCamera }
      ]
    );
  };

  if (showCamera) {
    return (
      <CameraScreen 
        onClose={handleCloseCamera}
        onBarcodeScanned={handleBarcodeScanned}
        scannedData={scannedData}
      />
    );
  }

  return <HomeScreen onScanPress={handleScanPress} />;
};

export default App;