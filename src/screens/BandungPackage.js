import React from 'react';
import {
  View, 
  Image, 
  ScrollView, 
  Dimensions, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Button
} from 'react-native';
import MapView, {MapViewProps} from 'react-native-maps'

import * as screenName from '../navigation/screenNames'

const images = [
    'https://i.ibb.co/hdwsC4t/bandung0.jpg',
    'https://i.ibb.co/Gt5gzzR/bandung.jpg',
    'https://i.ibb.co/61qmHv6/bandung3.jpg'
]

class BandungPackage extends React.Component {
  constructor(props){
    super(props)
  }
    render(){
      const {navigation}=this.props
        return(   
          <ScrollView style={styles.containerStyle}>
            <View style={styles.header}>
              <View style={{width:400, height:50}}>
                <Text style={styles.headerText}>Open Trip Bandung Package</Text>
              </View>
            </View>
            <View style={{flex:1}}>
                <View style={{width:410, height: 190, alignItems:'center'}}>
                <ScrollView pagingEnabled horizontal style={{width:400, height:200}}>                
                {
                    images.map((image, index) => (
                <Image 
                key={index}
                source={{uri: image}}
                style={{width:400, height:210}}/>
                ))
                }                
                </ScrollView>
                </View>                
                  <View style={styles.border}>
                  <Text style={styles.pointing}>
                    South of Bandung Details 
                  </Text>
                    <Text style={{letterSpacing:1}}>
                    Free cancelation before 24 Hours{"\n"}
                    Duration 9 Hours{"\n"}
                    Bahasa / English
                  </Text>
                  <Text style={styles.poin}>
                  Include:
                  </Text>
                  <Text>
                  • Tourguide {"\n"}
                  • Transportation {"\n"}
                  • The attraction tikets {"\n"}
                  • Free docummentation {"\n"}
                  • Gasoline
                  </Text>
                  <Text style={styles.poin}>
                    Exclude:
                  </Text>
                  <Text>
                  • Meals {"\n"}
                  • Personal purchase {"\n"}
                  • Transportation {"\n"}
                  • Extra time
                  </Text>
                
                </View>
                <View style={{marginTop:20}}/>
                <View style={styles.border}>
                  <Text style={styles.poin}>
                    Itinerary
                  </Text>                  
                  <Text>
                  • White Crater {"\n"}
                  • Tea Plantage {"\n"}
                  • Hot Spring {"\n"}
                  • Strawberry farm
                  </Text>
                  <View>
                  <Text style={styles.poin}>
                    Meeting Poin
                  </Text>
                  <Text>
                    We will meet at Braga street at 08.30 WIB in front of
                    Braga Permai Restaurant, we will be waiting for 15 minutes
                    please be on time, thank you. 
                  </Text>
                  <View style={{flex:1}}>
                    <MapView 
                    style={{width: '100%', height: 200}}
                    initialRegion={{
                      latitude: -6.917208,
                      longitude: 107.609521,
                      latitudeDelta: 0.0422,
                      longitudeDelta: 0.0221,
                    }}/>
                  <Text style={{fontSize:20}}>
                    LOKASI MEETING POINT PAKAI GPS
                  </Text>
                  </View>
                  </View>
                  <Button title="Choose Date" onPress={() => navigation.navigate(screenName.CALENDAR_SCREEN)}/>
                  <Button title="Book now" onPress={() => navigation.navigate(screenName.LOGIN_SCREEN)}/>
                  

                </View>          
      
      </View>
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  containerStyle:{ 
  flex:1
  },
  header:{
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor:'#FFCA28'
  },
  headerText:{
    fontSize: 25,
    justifyContent: 'center',
    alignItems:'center',
    color: '#E65100',
    fontWeight:'bold'
  },
  pointing:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10
  },
  
  poin:{
    fontSize: 20,
    fontWeight: 'bold'
},
  border:{
    borderColor:'black',
    borderWidth: 2,
    padding: 5,
    backgroundColor:'white',
    paddingLeft:10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomColor:'white'
    
 },
 borderTop: {
   borderColor:'black',
   borderTopLeftRadius:20,
   borderTopRightRadius:20,
   backgroundColor: 'orange',
   marginTop: 10,   
   marginLeft: 10,
   marginRight: 10
 }
})

export default BandungPackage;