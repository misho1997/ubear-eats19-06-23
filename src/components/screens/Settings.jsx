import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/Screen";
import SettingCard from "../organisms/SettingCard";
import { TextInput } from "react-native-gesture-handler";
import { Title } from "react-native-paper";

const Btn = styled(Button)``;

const Container = styled.View`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 19px;
`;

const UserCard = styled.View``;

const UserImage = styled.View`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const UserName = styled.Text``;

// const MainImage = styled.Image``;

const Input = styled.View`
  margin-left: 20px;
  margin-top: 5px;
`;

const cards = [
  {
    title: "Orders",
    icon: require("../images/Vector-4.png"),
  },
  {
    title: "Your favourites",
    icon: require("../images/Vector-7.png"),
  },
  {
    title: "Restaurant Rewards",
    icon: require("../images/Vector-8.png"),
  },
  {
    title: "orders",
    icon: require("../images/Vector-9.png"),
  },
  {
    title: "Wallet",
    icon: require("../images/Vector-12.png"),
  },
  {
    title: "Send a gift",
    icon: require("../images/Vector-11.png"),
  },
  {
    title: "Business preferences",
    icon: require("../images/Ellipse-10.png"),
  },
  {
    title: "Help",
    icon: require("../images/Vector-12.png"),
  },
  {
    title: "Uber Pass",
    icon: require("../images/Vector-9.png"),
  },
  {
    title: "Deliver with Uber",
    icon: require("../images/Vector-11.png"),
  },
  {
    title: "Settings",

    icon: require("../images/Vector-7.png"),
    value: ROUTES.SETTINGS_DETAILS,
  },
];

const Icons = styled.View``;

const Settings = ({ navigation }) => {
  const handlePress = (str) => {
    navigation.navigate(str);
  };
  return (
    <Container>
      <UserImage>
        <Image
          style={{ width: 36, height: 36 }}
          source={require("../images/Ellipse-3.png")}
        />
        <Title style={{ marginLeft: 15 }}>john doe</Title>
        <Input>
          <TextInput></TextInput>
        </Input>
      </UserImage>
      {/* <Text>Settings Screen</Text> */}
      {/* {cards.map((cards,))} */}
      {/* <Btn
        title="Go to details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      /> */}
      <Icons>
        {cards.map((item) => {
          return (
            <SettingCard
              key={item.index}
              title={item.title}
              icon={item.icon}
              onPress={() => handlePress(item.value)}
            />
          );
        })}
      </Icons>
      {/* <SettingCard
        title="Orders"
        icon={""}
        onPress={() => console.log("hello")}
      /> */}
    </Container>
  );
};

export default Settings;
