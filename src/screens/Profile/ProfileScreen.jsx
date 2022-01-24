import { useContext } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AuthContext } from '../../context';

export default function ProfileScreen({navigation}) {
    const {logOut} = useContext(AuthContext);

    return (
        <SafeAreaView style={tw`flex items-center justify-center h-full`}>
            <Text>Profile Screen</Text>
            <Button title='LOG OUT' onPress={() => logOut()} />
        </SafeAreaView>
    )
}