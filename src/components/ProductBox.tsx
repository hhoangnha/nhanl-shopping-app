import React from 'react';
import {FlatList} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import ProductCard from './ProductCard';

interface Props {
  title: string;
  data: Array<any>;
  onPress: Function;
}
const ProductBox: React.FC<Props> = ({title, data, onPress}) => {
  return (
    <View margin-5 padding-10 br20>
      <View row spread centerV>
        <Text s16b>{title}</Text>
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
          return <ProductCard item={item} onPress={onPress} />;
        }}
      />
    </View>
  );
};

export default ProductBox;
