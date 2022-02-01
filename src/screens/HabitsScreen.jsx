import { Button, SafeAreaView, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function HabitsScreen({navigation}) {
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('flex items-center justify-center h-full')}>
            <Text>Habits Screen</Text>
            {/* <Button title='Create Account' onPress={() => navigation.navigate("CreateAccount")} />
            <Button title='Forgot Password' onPress={() => navigation.navigate("ForgotPassword")} /> */}
        </SafeAreaView>
    )
}