import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HabitsScreen from './../../screens/Habits/HabitsScreen';
import RewardsScreen from './../../screens/Rewards/RewardScreen';
import ProfileScreen from './../../screens/Profile/ProfileScreen';

const Tabs = createBottomTabNavigator();

export default function MainNavigation() {
    const HabitsIcon = ({ color, size }) => (<MaterialCommunityIcons name="flag" color={color} size={size} />)
    const RewardsIcon = ({ color, size }) => (<MaterialCommunityIcons name="gift" color={color} size={size} />)
    const ProfileIcon = ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />)
  
    return (
      <Tabs.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#000" }}>
        <Tabs.Screen name="Habits" component={HabitsScreen} options={{ tabBarIcon: HabitsIcon }} />
        <Tabs.Screen name="Rewards" component={RewardsScreen} options={{ tabBarIcon: RewardsIcon }} />
        <Tabs.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ProfileIcon }} />
      </Tabs.Navigator>
    )
  }