import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {View} from 'react-native-ui-lib';
import colors from '../styles/colors';

interface Props {
  children: any;
  background?: string;
}
const ViewContainer: React.FC<Props> = ({children, background}) => {
  return (
    <View flex backgroundColor={background}>
      <SafeAreaView style={{backgroundColor: colors.trans}} />
      <StatusBar barStyle="dark-content" backgroundColor={colors.trans} />
      {children}
    </View>
  );
};

export default ViewContainer;
