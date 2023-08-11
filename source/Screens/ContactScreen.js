import React from 'react';
import {View,FlatList,StyleSheet, Pressable} from 'react-native';
import{useRoute,useNavigation} from '@react-navigation/native';
import chats from '../../assets/data/chats.json';
import ContactList from '../Components/ContactList';


const ContactScreen = () => {
  const route=useRoute();
  const navigation=useNavigation();
  const selectedMessages=route.params.selectedMessages;
  console.log("SelectedMessages received  ::",selectedMessages);
  //console.log('Selected Messages',route.selectedMessages);

  const handleContactPress = (item) => {
    // Pass the selected contact's messages to TextScreen
    navigation.navigate('TextScreen', {
      selectedMessages: item.lastMessage, // Assuming your contact object has a messages property
      name: item.user.name,
    });
  };
    return(             
       <View>           
        <FlatList
        data={chats}
        renderItem={({ item }) => (  
          <Pressable onPress = {()=>{handleContactPress(item)}}>         
            <ContactList chat={item} selectedMessages={selectedMessages} />    
          </Pressable>       
        )}
      /> 
       </View>
);
};
const styles = StyleSheet.create({
  container : {
      borderBottomWidth:StyleSheet.hairlineWidth,
      borderBottomColor:'grey',
      marginVertical : 5,
      marginHorizontal : 10,
      height : 70,
      flexDirection : 'row',
     // flex : 1,
      justifyContent : 'center',
      alignItems:'center'           
 },
  image:{
     width : 60,
     height: 60,
     borderRadius:30,
     marginRight: 10,
     justifyContent :'space-around',
     marginBottom:5
  },
 
  name : {
      fontWeight : 'bold',
      marginVertical : 5,
      flex : 1
  },


});        

       
 
export default ContactScreen;