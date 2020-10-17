import * as React from "react";
import Gradient from "../../common/components/Gradient";
import { Colors } from "../../common/styles";
import CardSwiper from "../../common/components/Swiper";
import { User } from "../../types";
import { Loader, Empty, RoundGradient } from "../../common/components";
import icons from "../../../assets/icons";
import { Container, ButtonWrapper, Icon } from "../styles";
import Header from "../../common/styles/styles";

type Props = {
  isLoading: boolean;
  navigation: any;
  people: User[];
};

function HomeScreen({ isLoading, navigation, people }: Props) {
  const swiperRef = React.useRef(null);

  const [isEmpty, setEmpty] = React.useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const onPress = (user: User) => {
    return navigation.navigate("UserDetail", { user });
  };

  const onSwipedAll = () => {
    return setEmpty(true);
  };

  const onSwipe = (user: User, type: string) => {
    // TODO swiped user
  };

  const handleReject = () => {
    const { current } = swiperRef;

    if (current) {
      return current.swipeLeft();
    }
  };

  const handleLike = () => {
    const { current } = swiperRef;

    if (current) {
      return current.swipeRight();
    }
  };

  return (
    <Gradient colors={Colors.backgroundGradient}>
      <Header title="Tinder" />
      {isEmpty ? (
        <Empty text="Looks like there is nothing to swipe" />
      ) : (
        <>
          <Container>
            <CardSwiper
              ref={swiperRef}
              data={people}
              handleDone={onSwipedAll}
              handlePress={onPress}
              handleSwipe={onSwipe}
            />
          </Container>
          <ButtonWrapper>
            <RoundGradient size={40} onPress={handleReject}>
              <Icon source={icons.reject} />
            </RoundGradient>
            <RoundGradient size={40} onPress={handleLike}>
              <Icon source={icons.like} />
            </RoundGradient>
          </ButtonWrapper>
        </>
      )}
    </Gradient>
  );
}

export default HomeScreen;
