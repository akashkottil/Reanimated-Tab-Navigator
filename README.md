# React Native Animated Tab Navigator

A highly customizable animated bottom tab navigator for React Native applications.

---

## 📦 Installation

To install the package, use one of the following commands:

```bash
npm install reanimated-tab-navigator
```

or

```bash
yarn add reanimated-tab-navigator
```

---

## 🗉️ Dependencies

This package requires the following dependencies to work properly:

- `react-native-reanimated`
- `react-native-gesture-handler`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-tab-view`
- `expo-linear-gradient`

Make sure these are installed in your project.

---

## 🚀 Usage

Here's how to use the package with a basic example:

```javascript
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
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
```

---

## 🎨 Customization

You can customize the tab bar's appearance by passing props to the `CustomTabBar` component. Here's an example:

```javascript
<CustomTabBar
  activeColor="#ffffff"
  inactiveColor="#ffffff70"
  gradientColors={['#BF2754', '#BF2754']}
/>
```

---

## ⚙️ Props

Below is a table of props supported by the `CustomTabBar` component:

| **Prop**         | **Type** | **Default**           | **Description**                           |
|-------------------|----------|-----------------------|-------------------------------------------|
| `activeColor`     | string   | `'#ffffff'`          | Color of the active tab                   |
| `inactiveColor`   | string   | `'#ffffff70'`        | Color of the inactive tab                 |
| `gradientColors`  | array    | `['#4A0494', '#A445B2']` | Colors for the gradient background         |

---

## 🔖 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.