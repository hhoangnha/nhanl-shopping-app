import React from 'react';
import HomeScreen from './HomeScreen';

export interface Props {
  navigation: any;
}
const HomeContainer: React.FC<Props> = ({navigation}) => {
  const [tabCategories, setTabCategories] = React.useState(0);
  const _goProductDetail = (item: any) => {
    navigation.navigate('ProductDetail', {data: item});
  };
  return (
    <HomeScreen
      tabCategories={tabCategories}
      setTabCategories={setTabCategories}
      goProductDetail={_goProductDetail}
    />
  );
};

export default HomeContainer;
