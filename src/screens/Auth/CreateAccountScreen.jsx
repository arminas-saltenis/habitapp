import { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AuthContext } from '../../context';

export default function CreateAccountScreen({navigation}) {
    const { createAccount } = useContext(AuthContext);

    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Create account screen</Text>
            <Button title='CREATE ACCOUNT' onPress={() => createAccount()}  />
            <Button title='Log In' onPress={() => navigation.navigate("LogIn")}  />
        </SafeAreaView>
    )
}