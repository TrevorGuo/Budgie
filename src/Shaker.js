import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AppContext from './Store';

const Shaker = () => {
  const myContext = useContext(AppContext);
  return <Text>Shaker</Text>;
};

export default Shaker;
