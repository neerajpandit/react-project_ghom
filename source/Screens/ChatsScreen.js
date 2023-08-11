import React from 'react';
import { FlatList, Pressable ,View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ChatList from '../Components/ChatList';
import chat from '../../assets/data/chats.json';
import { FontAwesome5 } from '@expo/vector-icons';

const ChatsScreen = () => {  
 const navigation=useNavigation();
 const route=useRoute();

  return (
    <View>
      <FlatList
        data={chat}
        renderItem={({ item }) => (         
          <Pressable onPress={()=>{
            console.log('Navigating to TextScreen with parameters:', { id: item.id, name: item.user.name });
            navigation.navigate('TextScreen',{id:item.id,name: item.user.name})}}>           
            <ChatList chat={item}  />
          </Pressable>       
        )}       
      /> 
      
      {/* Contacts Icon */}
      <TouchableOpacity style={styles.contactsButton} onPress={() => navigation.navigate('ContactScreen')}>
      <FontAwesome5 name="user-friends" size={24} color="white" />
      </TouchableOpacity>
      
   </View>
  );
};

const styles = StyleSheet.create({
  forwardContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  forwardIcon : {
    alignContent : 'flex-end'
  },
  contactsButton:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ChatsScreen;
