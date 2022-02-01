import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HabitsScreen from '../../screens/HabitsScreen';
import RewardsScreen from '../../screens/RewardScreen';
import AddScreen from '../../screens/AddItemScreen';

const Tabs = createBottomTabNavigator();

export default function MainNavigation() {
    const HabitsIcon = ({ color, size }) => (<MaterialCommunityIcons name="flag" color={color} size={size} />)
    const RewardsIcon = ({ color, size }) => (<MaterialCommunityIcons name="gift" color={color} size={size} />)
    const AddIcon = ({ color, size }) => (<MaterialCommunityIcons name="plus" color={color} size={size} />)
  
    return (
      <Tabs.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#000" }}>
        <Tabs.Screen name="Habits" component={HabitsScreen} options={{ tabBarIcon: HabitsIcon }} />
        <Tabs.Screen name="Create" component={AddScreen} options={{ tabBarIcon: AddIcon }} />
        <Tabs.Screen name="Rewards" component={RewardsScreen} options={{ tabBarIcon: RewardsIcon }} />
      </Tabs.Navigator>
    )
  }