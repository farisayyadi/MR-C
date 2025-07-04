import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ScanButton from './ScanButton';
import { styles } from '../src/styles/styles';

const HomeScreen = ({ onScanPress }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>MR-C</Text>
      <Text style={styles.subtitle}>Tap the button below to scan QR code</Text>
    </View>
    <ScanButton onPress={onScanPress} />
    <StatusBar style="light" />
  </View>
);

export default HomeScreen;