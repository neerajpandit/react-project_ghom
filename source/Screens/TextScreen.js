import React,{useLayoutEffect}  from 'react'
import { useState} from 'react';
import { Entypo } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ImageBackground,StyleSheet,FlatList, Text,KeyboardAvoidingView,Platform,Pressable} from 'react-native';
import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json'
import Messages from '../Components/Messages';
import InputBox from '../Components/InputBox';   


const TextScreen = () => {
  const route=useRoute();
  console.log('Route :',route);
  const navigation=useNavigation();
 
  console.log('name : ',route.params.name);

  const [isSelected,setIsSelected] = useState(false);
  const [selectedMessages,setSelectedMessages] = useState([])

 

  const handleLongPress = (messageId) => {
    if (!isSelected) {
      // Only set isSelected to true when it's not already in "selected" mode
      setIsSelected(true);   
    }
       // Toggle the messageId in the selectedMessages array
    setSelectedMessages((prevSelectedMessages) =>
    prevSelectedMessages.includes(messageId)
      ? prevSelectedMessages.filter((id) => id !== messageId)
      : [...prevSelectedMessages, messageId]
    );
  }; 

  const handlePress = (messageId) => {
    if (isSelected) {
        setSelectedMessages((prevSelectedMessages) => 
          prevSelectedMessages.includes(messageId)
          ? prevSelectedMessages.filter((id) => id !== messageId)
          : [...prevSelectedMessages, messageId]
      );
    }     
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name,
      headerRight: () => (
        selectedMessages.length > 0 && (
          <Entypo
            name="forward"
            size={24}
            color="white"
            onPress={() =>
              navigation.navigate("ContactScreen", { selectedMessages: selectedMessages })
            }
          />
        )
      ),
    });
  }, [navigation, route.params.name, selectedMessages]);
  
 
  console.log('SELECTED MESSAGES passed to contacts screen : ',selectedMessages);


  return(                      
    <KeyboardAvoidingView 
      behavior={Platform.OS==="ios" ?'padding':'height'}
        keyboardVerticalOffset={ 90}
        style = {styles.bg} >
        
        <ImageBackground source ={bg} style ={styles.bg}>                    
          <FlatList                                            
            data={messages}
            renderItem={({item})   =>(               
              <Pressable                    
                onLongPress ={() => handleLongPress(item.id)}
                onPress ={() =>handlePress(item.id) }

                style={[                                            
                  selectedMessages.includes(item.id) && styles.selectedMessages
                ]}
              >                     
                <Messages messages={item}/>
              </Pressable>   
                                 
            )}
            style={styles.list}
            inverted
          />         
        </ImageBackground>
      <InputBox />           
    </KeyboardAvoidingView>   
      
  );    
                        
};
const styles=StyleSheet.create({
    bg :{
        flex :1,
    },
    selectedMessages :{
        backgroundColor : 'rgb(30,190,165)',
        fontSize : 60
    }
});

export default TextScreen;
