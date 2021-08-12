import React from 'react';
import {WebView} from 'react-native-webview';

const SheetMusic = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{html: '<h1>Hello world</h1>'}}
      style={{height: 100, width: '100%'}}
    />
  );
};

export default SheetMusic;
