import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {Thumbnail} from 'native-base';

import FB from '../assets/icons/logoFB.png';
import IG from '../assets/icons/logoIG.png';
import WA from '../assets/icons/logoWA.png';
import GM from '../assets/icons/logoLoc.png'

export default class About extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoStyle}>
                <Thumbnail style={{height:100,width:100}} square large source={{uri:'https://i.ibb.co/Q6TGfwB/Vacatime1.png'}}/> 
                <Text>
                    Your Travel Buddy!
                </Text>
                </View>
                <View  style={{
                borderRadius: 5,
               padding:15,
                height:300,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 4,
                margin: 5,}}>
                <View >
                    <Text style={styles.infoText}>
                    VacaTime is a boutique tour agency specialising in giving visitor's 
                    to Indonesia a unique personalised experience of this incredible country!  
                    </Text>
                </View>
                <View style={{marginTop:15}}>
                <Text style={{marginBottom:15}}>
                    More Further Info Contact US:
                </Text>
                <TouchableOpacity>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={FB}/>
                    <Text style={{margin:5}}>
                        Vacatimeid
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={IG}/>
                    <Text style={{margin:5}}>
                        Vacatime.id
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={WA}/>
                    <Text style={{margin:5}}>
                        +62813 8686 4464
                    </Text>
                </View>                
                </TouchableOpacity>
                <View style={styles.iconPosition}>
                    <Image style={styles.iconStyle} source={GM}/>
                    <Text style={{margin:5,}}>
                        Jl. Cangkuang II no. 6A, Cimahi Selatan, Cimahi
                    </Text>
                </View>
                </View>
             </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#DCEDC8'
    },
    logoStyle: {
        marginTop: 70,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center'
      },
    infoText: {
       fontSize:20,
       fontFamily:'OpenSans'   
    },
    iconPosition: {
        flexDirection: 'row',
        marginRight:10,
        marginBottom:5
    },
    iconStyle: {
        width: 30,
        height: 30,
    }
})