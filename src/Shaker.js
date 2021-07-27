import manager from './Manager';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const scanAndConnect = () => {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      return;
    }

    device
      .connect()
      .then(device => {
        return device.discoverAllServicesAndCharacteristics();
      })
      .catch(error => {
        console.log(error);
        return;
      });
  });
};

// useEffect(() => {
//   manager.onStateChange(state => {
//     const subscription = manager.onStatChange(state => {
//       if (state === 'PoweredOn') {
//         this.scanAndConnect();
//         subscription.remove();
//       }
//     }, true);
//     return () => subscription.remove();
//   });
// }, [manager]);

const Shaker = () => {
  const [devices, setDevices] = useState([]);
  return <Text>Shaker</Text>;
};

export default Shaker;
