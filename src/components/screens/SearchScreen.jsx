import { View, Image, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import SearchCard from "../organisms/SearchCard";

const Container = styled.ScrollView``;

const Title = styled(Text)`
  margin-top: 100px;
  margin-left: 20px;
  color: #6b6b6b;
`;

const Section = styled.View`
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;

const Section2 = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`;

const Subtitle = styled(Text)`
  margin-left: 20px;
`;

const search = [
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Breakfast and Brunch",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Coffee and Tea",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Chinese",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Indian",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Latest Deals",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Restaurant Rewards",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Best Overall",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Mexican",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Pizza",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Sandwich",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Asian",
  },
  {
    imgUrl: require("../images/Vector-20.png"),
    title: "Bakery",
  },
];

const Search = styled.View`
  margin-top: 30px;
`;

const Wrapper = styled(Text)``;

const SearchScreen = () => {
  return (
    <Container>
      <Title>Recent searches</Title>
      <Section>
        <Image source={require("../images/Vector-20.png")} />
        <Subtitle>Cafe</Subtitle>
      </Section>
      <Section2>
        <Image source={require("../images/Vector-20.png")} />
        <Subtitle>Irish</Subtitle>
      </Section2>
      <Wrapper style={{ marginTop: 30, marginLeft: 20, color: "#6b6b6b" }}>
        Top Categories
      </Wrapper>
      <Search>
        {search.map((item) => {
          return <SearchCard title={item.title} imgUrl={item.imgUrl} />;
        })}
      </Search>
    </Container>
  );
};

export default SearchScreen;
