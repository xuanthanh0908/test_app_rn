import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhoneOTP, GoogleAuth, Notification, Home, Detail} from '../screens';
const Stack = createNativeStackNavigator();
function Router(props, ref) {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="PhoneOTP" component={PhoneOTP} />
        <Stack.Screen name="Google" component={GoogleAuth} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="TestScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default React.forwardRef(Router);
