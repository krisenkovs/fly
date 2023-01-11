import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{uri: 'https://batteryfly.io'}}
      forceDarkOn={false}
      cacheEnabled={true}
      geolocationEnabled={true}
      domStorageEnabled={true}
      nestedScrollEnabled={true}
      pullToRefreshEnabled={true}
      javaScriptEnabled={true}
    />
  );
};

export default App;
