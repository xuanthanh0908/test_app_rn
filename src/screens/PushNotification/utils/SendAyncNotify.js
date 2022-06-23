const sendNotification = async data => {
  const FIRE_BASE_API = 'AAAAZAKhaU8:APA91bHM8fxcPALAUSpFZhRobUDKAw5hKW_Cs9_mhY51d0IHyw-0bnYOVyDmuPqDT_x6ohhA80De_DjFRgud0KyIng3vUXkVeQz1czxfy_vOl8YR-gN7zULQ1NjV0pUMDgp1laI6OUcm';
  const mess = {
    registration_ids: [data.token],
    data: data.data,
    notifications: {
      title: data.title,
      body: data.body,
      sound: 1,
      vibrate: 1,
      show_in_foreground: true,
      priority: 'high',
      content_available: true,
    },
  };
  let headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Key=' + FIRE_BASE_API,
  });
  let response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers,
    body: JSON.stringify(mess),
  });
  let json = await response.json();
  //console.log(json);
};
export {sendNotification};
