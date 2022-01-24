import { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AuthContext } from '../../context';

export default function LogInScreen({navigation}) {
    const { logIn } = useContext(AuthContext);

    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Log in screen</Text>
            <Button title='LOG IN' onPress={() => logIn()} />
            <Button title='Create Account' onPress={() => navigation.navigate("CreateAccount")} />
            <Button title='Forgot Password' onPress={() => navigation.navigate("ForgotPassword")} />
        </SafeAreaView>
    )
}