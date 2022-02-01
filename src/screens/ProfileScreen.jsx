import { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { AuthContext } from '../context';

export default function ProfileScreen({navigation}) {
    const {logOut} = useContext(AuthContext);
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('flex items-center justify-center h-full')}>
            <Text>Profile Screen</Text>
            <Button title='LOG OUT' onPress={() => logOut()} />
        </SafeAreaView>
    )
}