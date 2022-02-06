import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  headerRightSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSearchItem: {
    // paddingRight: 20,
    // paddingRight: 10,
    // paddingLeft: 10,
  },
  headIcon: {
    width: 20,
    height: 20,
  },

  // category
  boxCategory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
  categoryIcon: {width: 35, height: 35, marginBottom: 5},
});
