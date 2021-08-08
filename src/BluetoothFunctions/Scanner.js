import {BleManager} from 'react-native-ble-plx';

const manager = new BleManager();

export const scan = context => {
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
              device.name === 'Trevor’s MacBook Pro'
            ) {
              console.log(device.id, device.name);
              manager.stopDeviceScan();
              console.log('Connected');
              device
                .connect()
                .then(() => {
                  return device.discoverAllServicesAndCharacteristics();
                })
                .then(() => context.setConnected(true))
                .then(() => {
                  deviceServices = device.services();
                  return deviceServices;
                })
                .then(() => {
                  deviceCharacteristics = device.characteristicsForService(
                    deviceServices._W[0].uuid,
                  );
                  return deviceCharacteristics;
                })
                .then(() => {
                  console.log(deviceCharacteristics);
                  context.setDeviceID(deviceCharacteristics._W[0].deviceID);
                  context.setSUUID(deviceCharacteristics._W[0].serviceUUID);
                  context.setCUUID(deviceCharacteristics._W[0].uuid);
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

export const disconnect = context => {
  manager
    .cancelDeviceConnection(context.DEVICE_ID)
    .then(() => {
      console.log('Disconnected');
    })
    .then(() => {
      context.setConnected(false);
      context.setDeviceID('0');
      context.setSUUID('0');
      context.setCUUID('0');
    });
};
