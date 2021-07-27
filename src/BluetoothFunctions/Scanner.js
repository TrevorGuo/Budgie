import {BleManager} from 'react-native-ble-plx';
// import manager from '../Manager';

const manager = new BleManager();

export const scan = function scan() {
  const subscription = manager.onStateChange(state => {
    if (state === 'PoweredOn') {
      manager.startDeviceScan(
        null,
        {allowDuplicates: false},
        (error, device) => {
          if (error) {
            console.log(error);
          }
          if (device != null) {
            console.log(device.id, device.name);
          }
        },
      );
      subscription.remove();
    } else {
      console.log('PoweredOff');
    }
  }, true);
  //   manager.startDeviceScan(null, {allowDuplicates: false}, (error, device) => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     if (device != null) {
  //       console.log(device.id);
  //     }
  //   });
  console.log('scanned');
};
