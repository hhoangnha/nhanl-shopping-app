import React from 'react';
import {Image, ScrollView} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import Header from '../../components/Header';
import ViewContainer from '../../components/ViewContainer';
import {Icons} from '../../styles/images';
import styles from './ProductStyle';
import colors from '../../styles/colors';
import Carousel from '../../components/Carousel';
import Heart from '../../components/Heart';
import ButtonCustom from '../../components/ButtonCustom';
import formatMoney from '../../utils/formatMoney';
import ReadMore from '../../components/ReadMore';
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
export interface Props {
  data: any;
  goBack: Function;
}
const ProductDetailScreen: React.FC<Props> = ({data, goBack}) => {
  return (
    <ViewContainer background={colors.white}>
      <Header
        background={colors.trans}
        left={
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={Icons.BACK} style={styles.headIcon} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            backgroundColor={colors.white}
            br50
            padding-5
            style={styles.rightSearchItem}
            onPress={() => null}>
            <Image style={styles.headIcon} source={Icons.BAG} />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Carousel data={dummyData} />
          <Heart position="absolute" right={20} bottom={20} />
        </View>
        <View margin-10>
          <View row spread centerV>
            <Text s16b>{data.data?.title}</Text>
            <Text s14b red10>
              {formatMoney(data.data?.price)} VNĐ
            </Text>
          </View>

          <View marginT-10>
            <Text s16b>Mô tả</Text>
            <ReadMore
              numberOfLines={3}
              seeMoreText="Đọc thêm"
              seeLessText="Ẩn bớt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              temporibus minus repellat ex exercitationem, quam, eos porro
              laborum a, eveniet ipsum ratione? At quis corrupti vitae ut
              ducimus. Fugiat, amet! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Expedita temporibus minus repellat ex
              exercitationem, quam, eos porro laborum a, eveniet ipsum ratione?
              At quis corrupti vitae ut ducimus. Fugiat, amet!Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Expedita temporibus minus
              repellat ex exercitationem, quam, eos porro laborum a, eveniet
              ipsum ratione? At quis corrupti vitae ut ducimus. Fugiat, amet!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              temporibus minus repellat ex exercitationem, quam, eos porro
              laborum a, eveniet ipsum ratione? At quis corrupti vitae ut
              ducimus. Fugiat, amet!
            </ReadMore>
            {/* <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              temporibus minus repellat ex exercitationem, quam, eos porro
              laborum a, eveniet ipsum ratione? At quis corrupti vitae ut
              ducimus. Fugiat, amet! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Expedita temporibus minus repellat ex
              exercitationem, quam, eos porro laborum a, eveniet ipsum ratione?
              At quis corrupti vitae ut ducimus. Fugiat, amet!Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Expedita temporibus minus
              repellat ex exercitationem, quam, eos porro laborum a, eveniet
              ipsum ratione? At quis corrupti vitae ut ducimus. Fugiat, amet!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              temporibus minus repellat ex exercitationem, quam, eos porro
              laborum a, eveniet ipsum ratione? At quis corrupti vitae ut
              ducimus. Fugiat, amet!
            </Text> */}
          </View>
        </View>
      </ScrollView>
      <View margin-15 row spread centerV>
        {/* <ButtonCustom
          width="35%"
          label="ok"
          radius={10}
          onPress={() => null}
          background="red"
        /> */}
        <ButtonCustom
          width="60%"
          label="Thêm vào giỏ"
          radius={10}
          onPress={() => null}
          background={colors.dark}
        />
      </View>
    </ViewContainer>
  );
};

export default ProductDetailScreen;
