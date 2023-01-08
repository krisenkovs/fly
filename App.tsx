import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView source={{uri: 'https://batteryfly.io'}} forceDarkOn={false} />
  );
};

export default App;
