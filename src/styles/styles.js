import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F5249',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 80,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E3DE61',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#97B067',
    textAlign: 'center',
    lineHeight: 22,
  },
  scanButtonContainer: {
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: '#97B067',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderWidth: 2,
    borderColor: '#E3DE61',
  },
  scanButtonText: {
    color: '#2F5249',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topBlurredArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBlurredArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanWindow: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  scanTextContainer: {
    backgroundColor: 'rgba(47, 82, 73, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E3DE61',
    marginBottom: 20,
  },
  scanText: {
    color: '#E3DE61',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'rgba(47, 82, 73, 0.9)',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E3DE61',
  },
  closeButtonText: {
    color: '#E3DE61',
    fontSize: 18,
    fontWeight: 'bold',
  },
});