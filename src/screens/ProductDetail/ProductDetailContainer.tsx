import {useRoute} from '@react-navigation/native';
import React from 'react';
import {detailScreenRouteType} from '../../navigation/types';
import ProductDetailScreen from './ProductDetailScreen';

interface Props {
  navigation: any;
}
const ProductDetailContainer: React.FC<Props> = ({navigation}) => {
  const {params}: any = useRoute<detailScreenRouteType>();

  const goBack = () => {
    navigation.goBack();
  };
  return <ProductDetailScreen data={params} goBack={goBack} />;
};

export default ProductDetailContainer;
