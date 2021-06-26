import {Icon} from 'native-base';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const details = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButtonView} onPress={()=> navigation.goBack()}>
          <Icon name="chevron-back-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerButtonView, {backgroundColor: '#FED016'}]}>
          <Icon name="star-outline" />
        </TouchableOpacity>
      </View>

      <View style={{paddingHorizontal: 30, marginVertical: 20}}>
        <Text style={styles.nameText}>{route.params.details.name}</Text>
        <Text style={[styles.nameText, {color: '#F97520'}]}>
          {route.params.details.price}
        </Text>
        <Text style={styles.size}>Size</Text>
        <Text style={styles.desc}>Medium 14"</Text>
        <Text style={styles.size}>Crust</Text>
        <Text style={styles.desc}>Thin Crust</Text>
        <Text style={styles.size}>Delivery in</Text>
        <Text style={styles.desc}>30 min</Text>

        <Image
          source={route.params.details.image}
          style={{
            height: 260,
            width: 260,
            position: 'absolute',
            right: 0,
            top: 150,
          }}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Place an Order</Text>
        <Icon name="chevron-forward-outline"/>
      </TouchableOpacity>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
  },
  header: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  headerButtonView: {
    height: 45,
    width: 45,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  size: {
    fontSize: 18,
    fontWeight: '100',
    marginVertical: 10,
    marginTop:40
  },
  desc: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button:{
    height:140,
    width:'100%',
    backgroundColor:'#FED016',
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  buttonText:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'bold'
  }
});
