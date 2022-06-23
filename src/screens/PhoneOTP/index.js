import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PhoneOTP() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = React.useState(null);

  const [code, setCode] = React.useState('');
  const [phone, setPhoneNumber] = React.useState('');

  // Handle the button press
  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };
  const AlertInfor = (title, content) => {
    Alert.alert(title, content, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      AlertInfor('INFORMATION', 'CODE IS VERIFIED !!');
    } catch (error) {
      // console.log('Invalid code.');
      AlertInfor('INFORMATION', 'INVALID CODE !!');
    }
  };

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text style={{...styles.section_txt, color: 'green'}}>
          Please fill your phone number
        </Text>
        <TextInput
          placeholder="+8412345667"
          keyboardType="number-pad"
          style={styles.section_input}
          value={phone}
          onChangeText={text => setPhoneNumber(text)}
        />
        <TouchableOpacity
          style={
            phone.length >= 11
              ? styles.section_btn
              : {...styles.section_btn, backgroundColor: '#333'}
          }
          disabled={!(phone.length >= 11)}
          onPress={() => signInWithPhoneNumber(phone)}
        >
          <Text style={styles.section_txt}>Phone Number Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.section_txt, color: 'green'}}>
        Please fill your code
      </Text>
      <TextInput
        placeholder="123456"
        keyboardType="number-pad"
        style={styles.section_input}
        value={code}
        onChangeText={text => setCode(text)}
      />
      <TouchableOpacity
        style={
          code.length >= 6
            ? styles.section_btn
            : {...styles.section_btn, backgroundColor: '#333'}
        }
        disabled={!(code.length >= 6)}
        onPress={() => confirmCode()}
      >
        <Text style={styles.section_txt}>CONFIRM CODE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  section_input: {
    minHeight: 50,
    width: '100%',
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
    padding: 15,
    marginVertical: 15,
  },
  section_btn: {
    height: 50,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section_txt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
