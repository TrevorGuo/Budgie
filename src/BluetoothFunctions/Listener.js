import {manager} from './Manager';

export const listen = (context, tempo, times, setTimes) => {
  const characteristic = manager.readCharacteristicForDevice(
    context.DEVICE_ID,
    context.SERVICE_UUID,
    context.CHARACTERISTIC_UUID,
  );
  const interval = (60 / tempo) * 1000;
  const start = Date.now();
  console.log('Starting...');
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      setTimes(times);
      resolve();
    }, 5 * interval);
    characteristic.then(() => {
      manager.monitorCharacteristicForDevice(
        context.DEVICE_ID,
        context.SERVICE_UUID,
        context.CHARACTERISTIC_UUID,
        (error, characteristic) => {
          if (error) {
            console.log(error);
            reject();
          } else {
            const millis = Date.now() - start;
            times.push(millis);
            //setTimes([...times, millis]);
            console.log(millis);
          }
        },
      );
    });
  });
};
