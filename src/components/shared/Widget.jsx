import { Button, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function Widget(props, {navigation}) {
    const tailwind = useTailwind();

    return (
        <TouchableOpacity activeOpacity={0.5} style={tailwind(`bg-white flex h-${props.height} w-full my-2 rounded-xl drop-shadow-xl`)}>
            <View style={tailwind('p-6')}>
                <Text style={tailwind('text-2xl font-bold')}>{props.title}</Text>
                <Text>{props.description}</Text>
            </View>
        </TouchableOpacity>
    )
}