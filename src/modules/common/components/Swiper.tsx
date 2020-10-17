import React, { useRef, useState } from "react";
import Swiper from "react-native-deck-swiper";
import styled from "styled-components/native";
import { Colors, Metric } from "../styles";
import { User } from "../../types";
import { getFirstImage } from "../../helper";
import { Mask } from "./Avatar";
import Chip from "./Chip";
import Online from "./Online";

type Props = {
  data: User[];
  handleDone: () => void;
  handlePress: (user: User) => void;
  handleSwipe: (user: User, type: string) => void;
};

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Card = styled.View`
  flex: 1;
  border-radius: 25px;
  border-width: 2px;
  overflow: hidden;
  border-color: ${Colors.gray};
`;

const Detail = styled.View`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  margin-left: ${Metric.lg}px;
  margin-bottom: ${Metric.lg}px;
`;

const Name = styled.Text`
  font-family: System;
  font-weight: bold;
  font-size: 24px;
  color: ${Colors.white};
`;

const swiperProps = {
  cardIndex: 0,
  cardVerticalMargin: 60,
  cardHorizontalMargin: 40,
  marginBottom: 180,
  stackSize: 3,
  stackSeparation: 15,
  animateOverlayLabelsOpacity: true,
  animateCardOpacity: true,
  disableBottomSwipe: true,
  disableTopSwipe: true,
  horizontalSwipe: true,
  backgroundColor: "transparent",
  overlayLabels: {
    left: {
      title: "NOPE",
      style: {
        label: {
          backgroundColor: Colors.orange,
          color: Colors.white,
        },
        wrapper: {
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          marginTop: 30,
          marginLeft: -30,
        },
      },
    },
    right: {
      title: "LIKE",
      style: {
        label: {
          backgroundColor: Colors.orange,
          color: Colors.white,
        },
        wrapper: {
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: 30,
          marginLeft: 30,
        },
      },
    },
  },
};

const CardSwiper = React.forwardRef(
  ({ handlePress, handleDone, handleSwipe, data }: Props, ref) => {
    const [cards] = useState(data);

    const onSwiped = (swipedIndex: number, type: string) => {
      return handleSwipe(cards[swipedIndex], type);
    };

    const renderCard = (card: any, index: number) => {
      return (
        <Card>
          <Mask />
          <Chip size="large" text={card.info.type} />
          <Image source={{ uri: getFirstImage(card.photos) }} />
          <Detail>
            <Name>
              {card.info.name || ""}, {card.info.age || ""}
            </Name>
            <Online isOnline={true} />
          </Detail>
        </Card>
      );
    };

    const onSwipeLeft = (swipedIndex: number) => onSwiped(swipedIndex, "left");
    const onSwipeRight = (swipedIndex: number) =>
      onSwiped(swipedIndex, "right");

    const onTapCard = (tappedIndex: number) => handlePress(cards[tappedIndex]);
    const onSwipedAllCards = () => handleDone();

    return (
      <Swiper
        ref={ref}
        onSwipedLeft={onSwipeLeft}
        onSwipedRight={onSwipeRight}
        onTapCard={onTapCard}
        cards={cards}
        renderCard={renderCard}
        onSwipedAll={onSwipedAllCards}
        {...swiperProps}
      />
    );
  }
);

export default CardSwiper;
