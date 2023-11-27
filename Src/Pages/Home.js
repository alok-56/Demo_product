import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from '../Componets/Header';
import Products from '../Componets/Products';

const Home = () => {

  return (
    <View>
      <Header></Header>
      <Products></Products>
    </View>
  );
};

export default Home;
