import React from "react";
import { FlatList } from "react-native";
import CardItem from "./CardItem";

const CardList = ({ users, navigation }) => {
  return (
    <FlatList
      style={{ marginTop: 10 }}
      data={users}
      renderItem={({ item: element }) => (
        <CardItem
          navigation={navigation}
          avatar={element.picture}
          username={element.username}
          intereses={element.tags}
          id={element.id}
        />
      )}
    />
  );
};

export default CardList;
