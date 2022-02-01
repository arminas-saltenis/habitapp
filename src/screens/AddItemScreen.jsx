import { SafeAreaView, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Widget from '../components/shared/Widget';

export default function LoadingScreen({navigation}) {
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('flex items-center justify-center mx-4')}>
            <Widget 
                title="Create Habit"
                height="36"
                description="Create a habit that you want to track"
                image={require(`./../assets/images/sunny_day.png`)} 
            />
            <Widget
                title="Create Reward"
                height="36"
                description="Create a reward that you would like to redeem after sticking to your habits"
            />
            <Widget 
                title="Create Milestone"
                height="36"
                description="Create a milestone that you would love to reach"
            />
        </SafeAreaView>
    )
}