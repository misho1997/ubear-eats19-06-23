import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import CategoryCard from "../organisms/CategoryCard";

const Container = styled.View`
  margin-top: 50px;
`;

const foods = [
  {
    imgUrl: require("../images/Yougurt.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Yougurt.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Snack.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Snack1.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Foods.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Frozen.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Home.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Ice-cream.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Yougurt.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../images/Ice-cream.png"),
    title: "Fruits & vegetables",
  },
];

const CategoriesDetails = () => {
  return (
    <Container>
      {foods.map((item) => {
        return <CategoryCard imgUrl={item.imgUrl} title={item.title} icon />;
      })}
    </Container>
  );
};

export default CategoriesDetails;
