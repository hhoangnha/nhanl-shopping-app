/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native';
// import colors from '../styles/colors';
interface Props {
  width?: string;
  label?: string;
  placeholder?: string;
  keyboardType?: any;
  editable?: boolean;
  value: any;
  leftIcon?: any;
  rightIcon?: any;
  background?: string;
  hideTextInput?: boolean;
  onChangeText?: any;
  pressRight?: any;
  isError?: boolean;
  textError?: any;
  small?: boolean;
  titleRequired?: boolean;
  simpleInput?: boolean;
  radius?: number;
}
const Input: React.FC<Props> = ({
  width,
  label,
  placeholder,
  keyboardType,
  editable,
  value,
  leftIcon,
  rightIcon,
  background,
  hideTextInput,
  onChangeText,
  pressRight,
  isError,
  textError,
  small,
  titleRequired,
  simpleInput,
  radius,
}) => {
  return (
    <View width={width ? width : '100%'}>
      {isError && <View marginT-10 />}
      {!isError && (
        <View row>
          {label && <Text style={styles.label}>{label}</Text>}
          {titleRequired && <Text red10> (*)</Text>}
        </View>
      )}
      {textError && <Text red10>{textError}</Text>}
      <View
        row
        center
        spread
        style={[
          radius === 0 ? {borderRadius: radius} : {borderRadius: 5},
          background !== '' && {backgroundColor: background},
          isError && styles.inputError,
          small ? styles.btnSmall : styles.btnLarger,
          leftIcon && styles.inputPadding,
        ]}>
        <View row centerV paddingL-5>
          {leftIcon}
          <TextInput
            autoCapitalize="none"
            style={simpleInput ? styles.simpleInput : styles.defaultInput}
            placeholder={placeholder}
            keyboardType={keyboardType ? keyboardType : 'default'}
            secureTextEntry={hideTextInput ? hideTextInput : false}
            editable={editable ? false : true}
            value={value}
            onChangeText={value => {
              onChangeText(value);
            }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={pressRight}>{rightIcon}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Input.defaultProps = {
  isError: false,
};

const styles = StyleSheet.create({
  boxInput: {
    // borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  inputError: {
    borderWidth: 1,
    // borderColor: colors.error,
  },
  btnSmall: {
    // padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    padding: Platform.OS === 'ios' ? 10 : 0,
  },
  btnLarger: {
    padding: 18,
    paddingLeft: Platform.OS === 'ios' ? 10 : 30,
    paddingRight: Platform.OS === 'ios' ? 10 : 30,
  },
  inputPadding: {
    paddingLeft: Platform.OS === 'ios' ? 20 : 30,
    paddingRight: Platform.OS === 'ios' ? 40 : 30,
  },
  simpleInput: {
    width: '100%',
    paddingLeft: 0,
  },
  defaultInput: {
    width: '100%',
    paddingLeft: 10,
  },
});

export default Input;
