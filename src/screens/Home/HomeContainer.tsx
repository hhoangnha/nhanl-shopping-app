import React from 'react';
import HomeScreen from './HomeScreen';

export interface Props {}
const HomeContainer: React.FC<Props> = ({}) => {
  const [tabCategories, setTabCategories] = React.useState(0);
  return (
    <HomeScreen
      tabCategories={tabCategories}
      setTabCategories={setTabCategories}
    />
  );
};

export default HomeContainer;
