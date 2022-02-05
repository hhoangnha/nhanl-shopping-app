import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

interface Props {
  background?: string;
  left?: any;
  pressLeft?: any;
  pressRight?: any;
  title?: string;
  color?: string;
  right?: any;
}
const Header: React.FC<Props> = ({
  background,
  left,
  pressLeft,
  pressRight,
  title,
  color,
  right,
}) => {
  return (
    <View
      row
      spread
      centerV
      paddingL-15
      paddingR-15
      padding-5
      width={'100%'}
      backgroundColor={background ? background : colors.white}>
      <TouchableOpacity onPress={pressLeft}>
        <View>{left}</View>
      </TouchableOpacity>
      <View>
        <Text style={[styles.title, {color: color ? color : colors.white}]}>
          {title}
        </Text>
      </View>

      {/* right */}
      <TouchableOpacity onPress={pressRight}>
        <View>{right}</View>
      </TouchableOpacity>
      {/* right */}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Header;
