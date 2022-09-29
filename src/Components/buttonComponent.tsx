import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const ButtonComponent = (props) =>{
    return(
        <View>
<TouchableOpacity style={[styles.btn,props.Btn]} disabled={props.disable}>
    <Text style={[styles.btnText,props.BtnText]}>{props.buttonName}</Text>
</TouchableOpacity>
        </View>
    )
}
export default ButtonComponent;

const styles = StyleSheet.create({
    btn:{
backgroundColor:"#fe3c72",
width:"75%",
alignSelf:'center',
padding:12,
borderRadius:35,
    },
    btnText:{
color:"white",
fontSize:20,
fontWeight:'500',
alignSelf:'center'

    }
})