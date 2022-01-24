import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function LoadingScreen({navigation}) {
    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Loading...</Text>
        </SafeAreaView>
    )
}