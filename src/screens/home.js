import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CATAGORY, PIZZA} from './Data';

const home = ({navigation}) => {
  const [isSelect, setIsSelect] = useState(null);

  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => setIsSelect(index)}>
        <View
          style={[
            styles.catagory,
            {backgroundColor: isSelect === index ? '#FED016' : '#fff'},
          ]}>
          <Image
            source={item.image}
            style={{width: 70, height: 70, marginVertical: 10}}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
            {item.name}
          </Text>

          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: isSelect === index ? '#fff' : '#F67779',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="chevron-forward-outline" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderPopularItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Details', {details : item})}>
        <View style={styles.popularView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="pizza-outline"
              style={{color: '#FED016', fontSize: 18}}
            />
            <Text>{item.top}</Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 15}}>
            {item.name}
          </Text>
          <Text style={{fontWeight: '100', fontSize: 16, marginVertical: 4}}>
            Weight 540 gr
          </Text>
          <View
            style={{
              height: 50,
              width: 70,
              backgroundColor: '#FED016',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="add-circle" />
          </View>
          <View style={{position:'absolute', right:10, top:20}}>
            <Image source={item.image} style={{height:120, width:120}}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../asset/avatar.png')} style={styles.avatar} />
        <Icon name="menu-outline" />
      </View>
      <View style={{paddingHorizontal: 25, marginVertical: 20}}>
        <Text style={{fontSize: 18}}>Food</Text>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>Delivery</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Icon name="search-outline" />
          <View
            style={{
              borderBottomWidth: 0.5,
              width: '90%',
              borderColor: '#ccc',
              marginHorizontal: 10,
            }}>
            <TextInput placeholder="Search..." />
          </View>
        </View>
      </View>

      <View style={{flex: 3}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingHorizontal: 30,
            marginVertical: 10,
          }}>
          Categories
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATAGORY}
          renderItem={renderCategoryItem}
        />
      </View>

      <View style={{flex: 3, paddingHorizontal: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
          Categories
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PIZZA}
          renderItem={renderPopularItem}
        />
      </View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catagory: {
    height: 200,
    width: 150,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignItems: 'center',
  },
  popularView: {
    height: 150,
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    padding: 15,
  },
});
