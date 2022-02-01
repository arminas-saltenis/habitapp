import { Button, SafeAreaView, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function LoadingScreen({navigation}) {
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('flex items-center justify-center h-full')}>
            <Text>Loading...</Text>
        </SafeAreaView>
    )
}