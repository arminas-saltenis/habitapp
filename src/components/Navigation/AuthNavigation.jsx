import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from './../../screens/Auth/LogInScreen';
import CreateAccountScreen from './../../screens/Auth/CreateAccountScreen';
import ForgotPasswordScreen from './../../screens/Auth/ForgotPasswordScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LogIn" component={LogInScreen} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  )
}