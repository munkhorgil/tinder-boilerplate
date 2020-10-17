import * as React from "react";
import { Label } from "../../common/components";
import Gradient from "../../common/components/Gradient";
import { Colors, Metric } from "../../common/styles";
import { User, Info } from "../../types";
import { getFirstImage } from "../../helper";
import { ScrollView } from "react-native";
import {
  Chip,
  Text,
  Body,
  Top,
  Avatar,
  Name,
  Wrapper,
  About,
  Subtitle,
  Card,
  SliderImage,
} from "../styles";
import Header from "../../common/styles/styles";

type Props = {
  currentUser: User;
  handleBack?: () => void;
};

function renderChip(text: string = "") {
  return (
    <Chip>
      <Text>{text.toUpperCase()}</Text>
    </Chip>
  );
}

function Profile({ handleBack, currentUser = {} }: Props) {
  const { info = {} as Info } = currentUser;

  function renderTop() {
    return (
      <Top>
        <Avatar source={{ uri: getFirstImage(currentUser.photos) }} />
        <Name>
          {info.name || ""}, {info.age}
        </Name>
        <Wrapper>
          {renderChip(info.sexuality)}
          {renderChip(info.type)}
        </Wrapper>
        <About>{info.about}</About>
      </Top>
    );
  }

  function renderLabel(title: string, values: string[], bordered?: boolean) {
    return (
      <>
        <Subtitle>{title}</Subtitle>
        <Body>
          {values.map((value, idx) => (
            <Label key={idx} text={value} bordered={bordered} />
          ))}
        </Body>
      </>
    );
  }

  function renderImages() {
    const photos = currentUser.photos || [];

    if (photos.length === 0) {
      return null;
    }

    return (
      <Card>
        <ScrollView horizontal={true}>
          {photos.map((photo) => (
            <SliderImage source={{ uri: photo.url }} />
          ))}
        </ScrollView>
      </Card>
    );
  }

  function renderDesires() {
    const { desires } = currentUser.info || {};

    if (!desires || desires.length === 0) {
      return null;
    }

    return <Card>{renderLabel("Desires", desires, true)}</Card>;
  }

  function renderInterests() {
    const { interests } = currentUser.info || {};

    if (!interests || interests.length === 0) {
      return null;
    }

    return <Card>{renderLabel("Interests", interests)}</Card>;
  }

  return (
    <Gradient
      colors={Colors.backgroundGradient}
      style={{ flex: 1, padding: Metric.sm }}
    >
      <ScrollView>
        <Header center={true} handleBack={handleBack} title="My Profile" />
        {renderTop()}
        {renderInterests()}
        {renderDesires()}
        {renderImages()}
      </ScrollView>
    </Gradient>
  );
}

export default Profile;
