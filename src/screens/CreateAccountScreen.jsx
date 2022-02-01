import { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { AuthContext } from '../context';

export default function CreateAccountScreen({navigation}) {
    const { createAccount } = useContext(AuthContext);
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('flex items-center justify-center h-full')}>
            <Text>Create account screen</Text>
            <Button title='CREATE ACCOUNT' onPress={() => createAccount()}  />
            <Button title='Log In' onPress={() => navigation.navigate("LogIn")}  />
        </SafeAreaView>
    )
}