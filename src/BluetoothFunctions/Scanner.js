import {BleManager} from 'react-native-ble-plx';

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
          if (
            device.name === 'ESP32' ||
            device.name === 'Shaker' ||
            device.name === 'Trevor’s MacBook Pro'
          ) {
            console.log(device.id, device.name);
            manager.stopDeviceScan();
            device
              .connect()
              .then(device => {
                return device.discoverAllServicesAndCharacteristics();
              })
              .then(() => console.log('Connected'))
              .catch(error => console.log('Failed to connect'));
          }
        },
      );
      subscription.remove();
    } else {
      console.log('PoweredOff');
    }
  }, true);
};
