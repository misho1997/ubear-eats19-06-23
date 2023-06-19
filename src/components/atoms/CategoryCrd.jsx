import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  margin-bottom: 30px;
`;

const Title = styled.Text`
  top: 70;
`;

const categoryCrd = ({ title, imgUrl }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image source={imgUrl} />
    </Container>
  );
};

export default categoryCrd;
