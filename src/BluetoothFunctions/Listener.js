import {manager} from './Manager';

export const listen = context => {
  const characteristic = readCharacteristicForDevice(
    context.DEVICE_ID,
    context.SERVICE_UUID,
    context.CHARACTERISTIC_UUID,
  );
  characteristic.then(() => {
    manager.monitorCharacteristicForDevice(
      context.DEVICE_ID,
      context.SERVICE_UUID,
      context.CHARACTERISTIC_UUID,
      (error, characteristic) => {
        if (error) {
          console.log(error);
        }
        console.log(characteristic);
      },
    );
  });
};
