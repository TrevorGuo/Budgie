import {BleManager} from 'react-native-ble-plx';

const manager = new BleManager();

export const scan = function scan() {
  const subscription = manager.onStateChange(state => {
    switch (state) {
      case 'PoweredOn':
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
              device.name === 'LE-Little Miss Dynamite'
            ) {
              console.log(device.id, device.name);
              manager.stopDeviceScan();
              device
                .connect()
                .then(() => {
                  return device.discoverAllServicesAndCharacteristics();
                })
                .then(() => console.log('Connected'))
                .then(() => {
                  deviceServices = device.services();
                  return deviceServices;
                })
                .then(() => {
                  console.log(deviceServices);
                })
                .catch(error => console.log(error));
            }
          },
        );
        subscription.remove();
        break;
      case 'PoweredOff':
        console.log('Bluetooth is turned off');
        break;
      case 'Unauthorized':
        console.log('Bluetooth is not authorized for use in this app');
        break;
      case 'Unsupported':
        console.log('Bluetooth LE is not supported on this device');
        break;
      default:
        console.log('Unknown state');
        break;
    }
  }, true);
};
