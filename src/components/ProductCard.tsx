import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Image from 'react-native-fast-image';
import {Icons} from '../styles/images';
import formatMoney from '../utils/formatMoney';

interface Props {
  item: any;
}
const ProductCard: React.FC<Props> = ({item}) => {
  const [favorite, setFavorite] = React.useState(false);
  const progress = useSharedValue(0.3);
  const scale = useSharedValue(1);

  const remaintedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}],
    };
  });

  const clickHeart = () => {
    if (favorite) {
      progress.value = withTiming(1, {duration: 300});
      scale.value = withTiming(1.4);
    } else {
      progress.value = withTiming(0.2, {duration: 300});
      scale.value = withTiming(1);
    }
    setFavorite(!favorite);
  };

  return (
    <View
      style={styles.boxCard}
      margin-3
      br20
      backgroundColor="white"
      padding-5>
      <TouchableWithoutFeedback onPress={() => clickHeart()}>
        <View style={[styles.heartBox]}>
          <Animated.View style={remaintedStyle}>
            <Image source={Icons.HEART} style={styles.icon} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
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
