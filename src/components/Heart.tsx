import React from 'react';
import {View} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Icons} from '../styles/images';

interface Props {
  onPress?: Function;
  background?: string;
  position?: 'relative' | 'absolute';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}
const Heart: React.FC<Props> = ({
  // onPress
  background,
  position,
  top,
  left,
  right,
  bottom,
}) => {
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
    let tmp = !favorite;
    if (tmp) {
      progress.value = withTiming(1, {duration: 100});
      scale.value = withTiming(1.2);
    } else {
      progress.value = withTiming(0.2, {duration: 200});
      scale.value = withTiming(1);
    }
    setFavorite(!favorite);
  };
  return (
    <TouchableWithoutFeedback onPress={() => clickHeart()}>
      <View
        style={[
          styles.heartBox,
          {
            position: position,
            right: right,
            left: left,
            top: top,
            bottom: bottom,
            backgroundColor: background,
          },
        ]}>
        <Animated.View style={remaintedStyle}>
          <Image source={Icons.HEART} style={styles.icon} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
Heart.defaultProps = {
  position: 'relative',
  background: 'white',
};
const styles = StyleSheet.create({
  heartBox: {
    // position: 'absolute',
    // right: 0,
    // top: 0,
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

export default Heart;
