import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// export type TabItemProps = {
//   focused: boolean;
//   label?: string;
//   name?: string;
// };

//index navigation
export type StackNavigatorParamsList = {
  Home: undefined;
  ProductDetail: {data: object};
};

//tab navigator
export type TabNavigatorParamsList = {
  HomeTab: undefined;
  Setting: undefined;
};

//user statck navigator
// export type UserStackParamsList = {
//   Login: undefined;
//   Register: undefined;
// };

export type userNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamsList>,
  StackNavigationProp<StackNavigatorParamsList>
>;

//params
export type ProductDetailParams = {
  ProductDetailParams: any;
};
export type detailScreenRouteType = RouteProp<
  ProductDetailParams,
  'ProductDetailParams'
>;
