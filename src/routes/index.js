import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/home";
import { Inbox } from "../pages/inbox";
import { New } from "../pages/new";
import { Profile } from "../pages/profile";
import { Search } from "../pages/search";

import { ButtonNew } from "../components/ButtonNew";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="ios-home" size={size} color={color} />;
            }
            return (
              <Ionicons name="ios-home-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="ios-search" size={size} color={color} />;
            }
            return (
              <Ionicons name="ios-search-outline" size={size} color={color} />
            );
          },
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ size }) => {
            return <ButtonNew size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Ionicons
                  name="ios-chatbubble-ellipses"
                  size={size}
                  color={color}
                />
              );
            }
            return (
              <Ionicons
                name="ios-chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="ios-person" size={size} color={color} />;
            }
            return (
              <Ionicons name="ios-person-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
