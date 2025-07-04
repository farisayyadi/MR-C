import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../src/styles/styles';

const ScanButton = ({ onPress }) => (
  <View style={styles.scanButtonContainer}>
    <TouchableOpacity style={styles.scanButton} onPress={onPress}>
      <Text style={styles.scanButtonText}>🔍 Scan QR Code</Text>
    </TouchableOpacity>
  </View>
);

export default ScanButton;