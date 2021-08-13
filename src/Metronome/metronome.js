import Sound from 'react-native-sound';

const tick = (sound, interval) => {
  sound.play();
  setTimeout(() => {
    sound.stop();
  }, 400);
};

export const playMetronome = tempo => {
  const interval = (60 / tempo) * 1000;
  const sound = new Sound('./metronome.wav', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
      return;
    }
  });
  var i = 0;
  return new Promise(function (resolve, reject) {
    const metronome = setInterval(() => {
      if (i === 4) {
        clearInterval(metronome);
        resolve();
      } else {
        tick(sound, interval);
        i++;
      }
    }, interval);
  });
};
