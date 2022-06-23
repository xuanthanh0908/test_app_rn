import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// const {height, width} = Dimensions.get('window');
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.txt_header}>TEST APP</Text>
      <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
        <TouchableOpacity
          style={styles.section_btn}
          onPress={() => navigation.navigate('PhoneOTP')}
        >
          <Text style={styles.section_txt}>Test Phone Authencation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.section_btn}
          onPress={() => navigation.navigate('Google')}
        >
          <Text style={styles.section_txt}>Test Google Authencation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.section_btn}
          onPress={() => navigation.navigate('Notification')}
        >
          <Text style={styles.section_txt}>Test Push notification </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
  },
  txt_header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 50,
  },
  section_btn: {
    height: 50,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  section_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
