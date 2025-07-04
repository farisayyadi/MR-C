import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { styles } from '../src/styles/styles';

const CameraOverlay = ({ onClose }) => (
  <View style={styles.overlay}>
    <BlurView intensity={80} style={styles.topBlurredArea}>
      <View style={styles.scanTextContainer}>
        <Text style={styles.scanText}>Point camera at QR code</Text>
      </View>
    </BlurView>
    
    <View style={styles.scanWindow} />
    
    <BlurView intensity={80} style={styles.bottomBlurredArea}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </BlurView>
  </View>
);

export default CameraOverlay;