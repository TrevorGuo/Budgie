import {manager} from './Manager';

export const listen = (context, times, setTimes) => {
  const characteristic = manager.readCharacteristicForDevice(
    context.DEVICE_ID,
    context.SERVICE_UUID,
    context.CHARACTERISTIC_UUID,
  );
  const start = Date.now();
  console.log('Starting...');
  characteristic.then(() => {
    manager.monitorCharacteristicForDevice(
      context.DEVICE_ID,
      context.SERVICE_UUID,
      context.CHARACTERISTIC_UUID,
      (error, characteristic) => {
        if (error) {
          console.log(error);
        } else {
          const millis = Date.now() - start;
          setTimes([...times, millis]);
          console.log(millis);
        }
      },
    );
  });
};
