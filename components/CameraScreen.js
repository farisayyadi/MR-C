import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CameraView } from 'expo-camera';
import CameraOverlay from './CameraOverlay';
import { styles } from '../src/styles/styles';

const CameraScreen = ({ onClose, onBarcodeScanned, scannedData }) => (
  <View style={styles.container}>
    <CameraView 
      style={styles.camera} 
      facing="back"
      onBarcodeScanned={scannedData ? undefined : onBarcodeScanned}
      barcodeScannerSettings={{
        barcodeTypes: ['qr', 'pdf417'],
      }}
    >
      <CameraOverlay onClose={onClose} />
    </CameraView>
    <StatusBar style="auto" />
  </View>
);

export default CameraScreen;