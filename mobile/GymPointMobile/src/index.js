import React from 'react';
import { StatusBar } from 'react-native';

import App from './App';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <App />
    </>
  );
}
