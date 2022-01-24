import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function HabitsScreen({navigation}) {
    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Habits Screen</Text>
            {/* <Button title='Create Account' onPress={() => navigation.navigate("CreateAccount")} />
            <Button title='Forgot Password' onPress={() => navigation.navigate("ForgotPassword")} /> */}
        </SafeAreaView>
    )
}