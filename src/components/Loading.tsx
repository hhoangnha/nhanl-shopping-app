import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {Images} from '../utils/images';
import colors from '../styles/colors';
import {useAppSelector} from '../app/hooks';

interface Props {}
const Loading: React.FC<Props> = ({}) => {
  const loading = useAppSelector((state: any) => state.loading);
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({value}) => {
    currentValue = value;
  });

  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: false,
      }).start();
    }
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      flipAnimation();
    }, 300);
    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading.visible]);

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [{rotateY: setInterpolate}],
  };

  return loading.visible ? (
    <View style={styles.container}>
      <View style={styles.boxLoading}>
        <Animated.Image
          source={Images.LOGO}
          style={[rotateYAnimatedStyle, styles.imageStyle]}
        />
        <View style={styles.boxText}>
          <Text style={styles.loadingText}>Đang tải ... </Text>
        </View>
      </View>
    </View>
  ) : null;
};

Loading.defaultProps = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    zIndex: 999,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  boxLoading: {
    alignItems: 'center',
    backgroundColor: colors.placeholder_light2,
    padding: 25,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 15,
  },
  boxText: {
    marginTop: 10,
  },
  loadingText: {
    fontSize: 16,
    color: colors.dark,
  },
});

export default Loading;
