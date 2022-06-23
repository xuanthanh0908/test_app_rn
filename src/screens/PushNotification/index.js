import React from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {sendNotification} from './utils/SendAyncNotify';
const TOKEN =
  'cHn-WDQ4QfmqLyENmgoLau:APA91bH-IuMn6Usa4SuOLY0NVqaNFRrKU7KK2VV_2YBhr7fJmsxrCh-FKREobPOpUeuqJTE8dbgEE-Qcgg8HB-rdstqiwPqHOS4G27BA3ilxMpoYnUmlVJ5fA-BSV0SJOMWC9tUQMBjV';
const PushNotificationScreen = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  // const testLocal = (title, content) => {
  //   PushNotification.localNotification({
  //     channelId: '32',
  //     title: title, // (optional)
  //     message: content, // (required)
  //     largeIconUrl:
  //       'https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  //     picture:
  //       'https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg', // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
  //     playSound: true, // (optional) default: true
  //     soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  //   });
  // };
  // const testLocalSchedule = () => {
  //   PushNotification.localNotificationSchedule({
  //     channelId: '12345',
  //     //... You can use all the options from localNotifications
  //     message: 'My Notification Message', // (required)
  //     date: new Date(Date.now() + 15 * 1000), // in 60 secs
  //     title: 'Test push notification on local android', // (optional)
  //     message: 'Test Message', // (required)
  //     largeIconUrl:
  //       'https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg',
  //     picture:
  //       'https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg', // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
  //     playSound: true, // (optional) default: true
  //     soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  //   });
  // };
  const sendNotifications = async (title, content) => {
    let notidata = {
      data: {
        id: 1,
        type: 'TestScreen',
        content: content,
        title: title,
      },
      title: title,
      body: content,
      token: TOKEN,
    };
    let result = await sendNotification(notidata);
    console.log(result);
  };
  return (
    <View style={styles.container}>
      <View style={{height: 50}}></View>
      <Text style={{...styles.section_txt, color: 'green'}}>TITLE</Text>
      <TextInput
        placeholder="Title"
        keyboardType="number-pad"
        style={styles.section_input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={{...styles.section_txt, color: 'green'}}>CONTENT</Text>
      <TextInput
        placeholder="Test message"
        keyboardType="number-pad"
        style={styles.section_input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <TouchableOpacity
        style={
          title.length >= 5 && content.length >= 10
            ? styles.section_btn
            : {...styles.section_btn, backgroundColor: '#333'}
        }
        disabled={!(title.length >= 5 && content.length >= 10)}
        onPress={() => sendNotifications(title, content)}
      >
        <Text style={styles.section_txt}>SEND MESSEAGE</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginVertical: 10,
  },
  section_txt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginLeft: 5,
  },
});

export default PushNotificationScreen;
