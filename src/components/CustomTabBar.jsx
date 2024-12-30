import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/tabNavigator.styles';

const getTabIcon = (routeName) => {
  switch (routeName) {
    case 'Home':
      return 'home-outline';
    case 'Profile':
      return 'person-outline';
    case 'Calendar':
      return 'calendar-outline';
    default:
      return 'apps-outline';
  }
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[styles.tabItem, isFocused ? styles.activeTab : styles.inactiveTab]}
            >
              {isFocused ? (
                <LinearGradient
                  colors={['#4A0494', '#A445B2']}
                  style={styles.innerTab}
                >
                  <Ionicons 
                    name={getTabIcon(route.name)} 
                    size={24} 
                    color="#fff" 
                  />
                  <Text style={[styles.tabText, styles.activeText]}>
                    {label}
                  </Text>
                </LinearGradient>
              ) : (
                <View style={styles.inactiveTab}>
                  <Ionicons 
                    name={getTabIcon(route.name)} 
                    size={24} 
                    color="#fff" 
                    style={styles.tabIcon} 
                  />
                  <Text style={styles.tabText}>{label}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar; 