import React,{useLayoutEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatsScreen from "../../Screens/ChatsScreen";
import TextScreen from "../../Screens/TextScreen";
import CallScreen from "../../Screens/CallScreen";
import StatusScreen from "../../Screens/StatusScreen";
import ContactScreen from "../../Screens/ContactScreen";

const stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


const ChatsStatusCallsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 20,
          color: "white",
          marginTop: 50,
          textTransform: "none",
          flexDirection: "row",
        },
        indicatorStyle: {
          height: 4,
        },
        tabBarItemStyle: {
          backgroundColor: "green",
        },
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{ tabBarLabel: "Chats" }}
      />
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{ tabBarLabel: "Status" }}
      />
      <Tab.Screen
        name="Calls"
        component={CallScreen}
        options={{ tabBarLabel: "Calls" }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {  
  return (
    <stack.Navigator>
      <stack.Screen
        name="ChatsScreen"
        component={ChatsStatusCallsScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name = "TextScreen"      
        component={TextScreen}
       // initialParams={{ selectedMessages: selectedMessages }} 
   
        options={() => ({        
          headerStyle: {
            backgroundColor: "green",
          },
          headerTitleStyle: {
            fontSize: 22,
            color: "white",
          },
          
          headerTintColor: "white",
          
          /*headerRight: (props) => {
            const selectedMessages = route.params?.selectedMessages || [];  
            console.log('SelectedMessages :',selectedMessages);       
            return (           
              selectedMessages.length > 0 && (
                <Entypo
                  {...props}
                  name="forward"
                  size={24}
                  color="white"
                  onPress={() =>
                    navigation.navigate("ContactScreen", {  selectedMessages:selectedMessages})
                  }
                />
             )
            );
          },*/
        })}
      
      />
      
    </stack.Navigator>
  );
};

export default Navigation;
