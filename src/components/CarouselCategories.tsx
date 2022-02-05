import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
import colors from '../styles/colors';
import '../styles/styles';

interface Props {
  data: Array<any>;
  tabCategories: any;
  setTabCategories: Function;
}
const CarouselCategories: React.FC<Props> = ({
  data,
  tabCategories,
  setTabCategories,
}) => {
  return (
    <View margin-10>
      <Text s16b>Danh mục</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => 'categories' + index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity margin-5 onPress={() => setTabCategories(index)}>
              <View
                centerV
                padding-30
                br10
                backgroundColor={
                  tabCategories === index ? colors.toastWarning : colors.white
                }>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text s12b grey20>
                {item?.name}
              </Text>
              <Text s10 grey30>
                30 sản phẩm
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});

export default CarouselCategories;
