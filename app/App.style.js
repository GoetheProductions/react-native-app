import { StyleSheet } from 'react-native';

const isCustomer = true;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: isCustomer ? '#3D3D3D' : '#EDEDED'
  }
});

export default styles;
