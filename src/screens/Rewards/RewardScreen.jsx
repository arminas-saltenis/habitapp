import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function RewardsScreen({navigation}) {
    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Rewards Screen</Text>
            {/* <Button title='Create Account' onPress={() => navigation.navigate("CreateAccount")} />
            <Button title='Forgot Password' onPress={() => navigation.navigate("ForgotPassword")} /> */}
        </SafeAreaView>
    )
}