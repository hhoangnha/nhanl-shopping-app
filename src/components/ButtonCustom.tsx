import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

interface Props {
  label?: string;
  background?: string;
  color?: string;
  onPress: () => void;
  radius: number;
  width: string;
}
const ButtonCustom: React.FC<Props> = ({
  label,
  background,
  color,
  radius,
  width,
  onPress,
}) => {
  return (
    // <View style={[styles.container]} backgroundColor={background}>
    <TouchableOpacity
      onPress={onPress}
      style={[{borderRadius: radius, width: width}]}
      backgroundColor={background}>
      <View row center spread style={[styles.boxButton]}>
        <View row centerV>
          <Text style={[styles.label, {color: color ? color : colors.white}]}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    // </View>
  );
};

ButtonCustom.defaultProps = {
  radius: 0,
  width: '100%',
};

const styles = StyleSheet.create({
  boxButton: {
    paddingLeft: 30,
    paddingRight: 30,
    padding: 14,
  },
  label: {
    fontSize: 15,
    // fontWeight: 'bold',
  },
});

export default ButtonCustom;
