import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding } from '../screen/Onboarding';
import { SignIn } from '../screen/SignIn';
import { SignUp } from '../screen/SignUp';
import { ForgotPassword } from '../screen/ForgotPassword';
import { VerificationCode } from '../screen/VerificationCode';
import { PasswordVerificationCode } from '../screen/PasswordVerificationCode';
import { ResetPassword } from '../screen/ResetPassword';

const Stack = createNativeStackNavigator();

export const PublicRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
        />
        <Stack.Screen 
          name="VerificationCode" 
          component={VerificationCode} 
        />
        <Stack.Screen 
          name="PasswordVerificationCode" 
          component={PasswordVerificationCode} 
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPassword} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
