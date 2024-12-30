# React Native Animated Tab Navigator

A customizable animated bottom tab navigator for React Native applications.

## Installation 

bash
npm install reanimated-tab-navigator
or
yarn add reanimated-tab-navigator

## Dependencies

This package requires the following dependencies:

- react-native-reanimated
- react-native-gesture-handler
- react-native-safe-area-context
- react-native-screens
- react-native-tab-view
- expo-linear-gradient

## Usage

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar } from 'react-native-animated-tab-navigator';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
}



## Customization

You can customize the tab bar appearance by passing props:


<CustomTabBar
activeColor="#ffffff"
inactiveColor="#ffffff70"
gradientColors={['#BF2754', '#BF2754']}
/>


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeColor | string | '#ffffff' | Color of active tab |
| inactiveColor | string | '#ffffff' | Color of inactive tab |
| gradientColors | array | ['#4A0494', '#A445B2'] | Colors for the gradient background |

## License

MIT