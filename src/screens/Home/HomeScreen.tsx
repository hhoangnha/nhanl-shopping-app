import React from 'react';
import {Image, ScrollView} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import Animated, {FadeInUp} from 'react-native-reanimated';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ViewContainer from '../../components/ViewContainer';
import {Icons} from '../../styles/images';
import styles from './HomeStyle';
import colors from '../../styles/colors';
import Carousel from '../../components/Carousel';
import CarouselCategories from '../../components/CarouselCategories';
import ProductBox from '../../components/ProductBox';

const dummyData = [
  {
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
    price: 1000000,
    rate: '4.0',
  },
  {
    title: 'Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
    price: 1500000,
    rate: '3.0',
  },
  {
    title: 'Vegatable Salad',
    url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
    price: 110000,
    rate: '4.5',
  },
];

const categoriesData = [
  {
    id: 1,
    name: 'All',
    icon: Icons.MENU,
  },
  {
    id: 2,
    name: 'Giày nam',
    icon: Icons.MEN_SHOES,
  },
  {
    id: 3,
    name: 'Giày nữ',
    icon: Icons.FEMALE_SHOES,
  },
  {
    id: 3,
    name: 'Giày thể thao',
    icon: Icons.RUNNING_SHOES,
  },
];

export interface Props {
  tabCategories: any;
  setTabCategories: Function;
}
const HomeScreen: React.FC<Props> = ({tabCategories, setTabCategories}) => {
  return (
    <ViewContainer>
      <Header
        background="transparent"
        left={<Text>HOME</Text>}
        right={
          <View style={styles.headerRightSearch}>
            <TouchableOpacity
              marginR-5
              backgroundColor="white"
              br50
              padding-5
              style={styles.rightSearchItem}
              onPress={() => null}>
              <Image style={styles.headIcon} source={Icons.BELL} />
            </TouchableOpacity>
            <TouchableOpacity
              backgroundColor="white"
              br50
              padding-5
              style={styles.rightSearchItem}
              onPress={() => null}>
              <Image style={styles.headIcon} source={Icons.BAG} />
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView nestedScrollEnabled={false}>
        <Animated.View entering={FadeInUp}>
          {/* search */}
          <View width={'100%'} row center marginT-5>
            <View width={'80%'}>
              <Input
                placeholder="Search"
                value={'search'}
                background={'white'}
                onChangeText={(value: string) => console.log(value)}
                small
                rightIcon={
                  <View marginR-10>
                    <Image source={Icons.SEARCH} style={styles.headIcon} />
                  </View>
                }
              />
            </View>
            <View
              width={'10%'}
              center
              marginL-10
              br10
              backgroundColor={colors.danger}
              padding-10>
              <TouchableOpacity>
                <Image source={Icons.SORT_MENU} />
              </TouchableOpacity>
            </View>
          </View>
          {/* search */}

          {/* carousel  */}
          <Carousel data={dummyData} />
          {/* carousel  */}

          {/* CarouselCategories  */}
          <CarouselCategories
            data={categoriesData}
            tabCategories={tabCategories}
            setTabCategories={setTabCategories}
          />
          {/* CarouselCategories  */}

          <ProductBox data={dummyData} />
        </Animated.View>
      </ScrollView>
    </ViewContainer>
  );
};

export default HomeScreen;
