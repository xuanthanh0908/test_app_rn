import React from 'react';
import Router from './src/routes';
import {fcmService} from './src/screens/PushNotification/services';
import {localNotificationService} from './src/screens/PushNotification/services/LocalNotificationService';
import {navigationRef, navigate} from './src/routes/RootNavigation';

export default function App() {
  React.useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
  }, []);

  const onRegister = token => {
    console.log('[App] Token', token);
  };

  const onNotification = notify => {
    console.log('[App] onNotification', notify);
    let tilte = '';
    let content = '';
    const options = {
      soundName: 'default',
      playSound: true,
    };
    if (notify.notification) {
      tilte = notify.notification.title;
      content = notify.notification.body;
    } else {
      tilte = notify.data.title;
      content = notify.data.content;
    }
    localNotificationService.showNotification(
      0,
      tilte,
      content,
      notify,
      options,
    );
  };

  const onOpenNotification = async notify => {
    console.log('notify', notify);
    if (notify.data.type) {
      navigationRef.navigate(notify.data.type, {
        title: notify.data.title,
        content: notify.data.content,
      });
    }
  };
  return <Router ref={navigationRef} />;
}
// PushNotification.createChannel(
//   {
//     channelId: '32', // (required)
//     channelName: 'My channel', // (required)
//     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
//     playSound: false, // (optional) default: true
//     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//     importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//     vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//   },
//   created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// );
// React.useEffect(() => {
//   PushNotification.configure({
//     // (optional) Called when Token is generated (iOS and Android)
//     onRegister: function (token) {
//       console.log('TOKEN:', token);
//     },
//     // (required) Called when a remote or local notification is opened or received
//     onNotification: function (notification) {
//       console.log('NOTIFICATION:', notification);
//       // process the notification here
//       // required on iOS only
//       notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },
//     // iOS only
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
//   });
//   PushNotification.createChannel(
//     {
//       channelId: '12345', // (required)
//       channelName: 'My channel', // (required)
//       channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
//       playSound: false, // (optional) default: true
//       soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//       importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//       vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//     },
//     created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
//   );
// }, []);
