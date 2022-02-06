import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
import {Icons} from '../styles/images';
import formatMoney from '../utils/formatMoney';
import Heart from './Heart';

interface Props {
  item: any;
  onPress: Function;
}
const ProductCard: React.FC<Props> = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(item)}>
      <View
        style={styles.boxCard}
        margin-3
        br20
        backgroundColor="white"
        padding-5>
        <Heart position="absolute" right={0} />
        <Image
          source={{
            uri: item.url,
          }}
          style={styles.imageSize}
          resizeMode={Image.resizeMode.cover}
        />

        <View margin-2 marginT-5>
          <Text s14b>{item?.title}</Text>
          <View row spread>
            <Text s14b red10>
              {formatMoney(item?.price)}
            </Text>
            <View row centerV>
              <Text s12>{item?.rate}</Text>
              <Image source={Icons.STAR} style={styles.sIcon} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  boxCard: {
    maxWidth: '50%',
  },
  imageSize: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  heartBox: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  sIcon: {
    width: 15,
    height: 15,
  },
});

export default ProductCard;
