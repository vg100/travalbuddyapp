import React  from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Button,
    AsyncStorage
} from 'react-native';
import * as screenNames from '../navigation/screenNames'
import {data,product} from '../data'
const Home =  (props) => {


    // const value= await AsyncStorage.getItem('user');
    // if(value){
    //     alert(value)
    // }
    
    const {navigation} = props
  
        return (
            <View style={{flex:1}}>
                    <ScrollView style={{backgroundColor:'#E1F5FE'}}>
                    <View style={styles.containerStyle}>
                <Image style={styles.upperImageStyle} source={{uri:'https://i.ibb.co/9TqB2Nk/top.jpg'}}/>
                <Text style={{alignSelf:'center',fontSize:15}}>Destination</Text>
                </View>
                
                <FlatList
                data={product}
                renderItem={({item})=>{
                    return(
                        
                        <View style={styles.borderStyle}>
                    <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('details',{title:item.packageTitle,item:item})}>
                        <Image source={{uri:item.url}} style = {styles.ImageClass}/>
                        <View style={{padding:4}}>
                        <Text style={{alignSelf:'center',fontSize:15,marginTop:3}}>{item.packageTitle}</Text>   
                        </View>
                                           
                    </TouchableOpacity>
                </View>  
                    )
                }}
                
                />
                </ScrollView>
            </View>
        );
    }




const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center'
    },
    bgImageStyle: {
        flex: 1
    },
    upperImageStyle: {
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 400,
        height: 180,
        marginTop:5
       
    },
    ImageClass: {
        flex:1,
        height: 200,
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        paddingTop: 1
    
        
    },
    borderStyle: {
      flex: 1,
      backgroundColor: 'white',
      borderWidth: 4,
      paddingBottom: 10,
      paddingTop: 10,
      marginBottom: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    bottomNavigation: {
        height:54, 
        backgroundColor:'lightgreen',
        flexDirection: 'row',
        alignItems:'center'       
    },
    bottomButton: {
        flex:1, 
        alignItems:'center',        
        justifyContent:'center',
    },
    textButton:{
        fontWeight: 'bold'
    }

})
export default Home;