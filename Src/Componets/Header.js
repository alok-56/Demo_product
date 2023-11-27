import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image,FlatList} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor:"#fff",
      }}>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 20, width: 20, marginTop: 5}}
            source={require('../Icons/arrow.png')}></Image>
          <Text
            style={{
              marginLeft: 12,
              fontSize: 16,
              fontWeight: '400',
              color: '#000',
            }}>
            Women
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '40%',
          }}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../Icons/search.png')}></Image>
          <Image
            style={{height: 25, width: 25}}
            source={require('../Icons/heart.png')}></Image>
          <Image
            style={{height: 25, width: 25}}
            source={require('../Icons/addtocard.png')}></Image>
        </View>
      </View>
      
    </View>
  );
};

export default Header;
