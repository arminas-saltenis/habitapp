import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function ForgotPasswordScreen({navigation}) {
    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Forgot password screen</Text>
            <Button title='Log In' onPress={() => navigation.navigate("LogIn")} />
            <Button title='Create Account' onPress={() => navigation.navigate("CreateAccount")} />
        </SafeAreaView>
    )
}