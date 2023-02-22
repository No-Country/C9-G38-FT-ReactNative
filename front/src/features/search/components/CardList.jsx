import React from 'react';
import { FlatList } from 'react-native';
import CardItem from './CardItem';

const CardList = ({ users, navigation }) => {
  return (
    <FlatList
      style={{ marginTop: 6, marginHorizontal: 10 }}
      data={users}
      renderItem={({ item: element }) => (
        <CardItem
          navigation={navigation}
          avatar={element.avatar}
          username={element.username}
          intereses={element.sports}
          user={element}
          id={element.id}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CardList;
