import { Button, SafeAreaView, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function ForgotPasswordScreen({navigation}) {
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('flex items-center justify-center h-full')}>
            <Text>Forgot password screen</Text>
            <Button title='Log In' onPress={() => navigation.navigate("LogIn")} />
            <Button title='Create Account' onPress={() => navigation.navigate("CreateAccount")} />
        </SafeAreaView>
    )
}