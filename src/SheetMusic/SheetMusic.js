import React from 'react';
import {WebView} from 'react-native-webview';
import HTML from './html';
import {Image} from 'react-native';
import Measure from './Measure';

const SheetMusic = () => {
  const source = require('./testHtml.html');
  const webviewSource = Image.resolveAssetSource(source);
  return (
    // <WebView
    //   originWhitelist={['*']}
    //   source={webviewSource}
    //   style={{height: 100, width: '100%'}}
    // />
    <Measure />
  );
};

export default SheetMusic;
