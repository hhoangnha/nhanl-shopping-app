import React from 'react';
import {StyleSheet, Dimensions, FlatList} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
import colors from '../styles/colors';
import ProductCard from './ProductCard';

interface Props {
  data: Array<any>;
}
const ProductBox: React.FC<Props> = ({data}) => {
  return (
    <View margin-5 padding-10 br20>
      <View row spread centerV>
        <Text s16b>Dành cho bạn</Text>
        <TouchableOpacity>
          <Text s12>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        scrollEnabled={false}
        // horizontal
        numColumns={2}
        keyExtractor={(item, index) => 'categories' + index}
        renderItem={({item}: any) => {
          return <ProductCard item={item} />;
        }}
      />
    </View>
  );
};

export default ProductBox;
