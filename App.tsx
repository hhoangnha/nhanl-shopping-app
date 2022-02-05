import React from 'react';
import {LogBox} from 'react-native';
import RootNavigation from './src/navigation';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
export default function App() {
  return <RootNavigation />;
}
