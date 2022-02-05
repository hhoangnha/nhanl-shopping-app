import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {View} from 'react-native-ui-lib';

interface Props {
  children: any;
  background?: string;
}
const ViewContainer: React.FC<Props> = ({children, background}) => {
  return (
    <View flex backgroundColor={background}>
      <SafeAreaView style={{backgroundColor: 'transparent'}} />
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      {children}
    </View>
  );
};

export default ViewContainer;
