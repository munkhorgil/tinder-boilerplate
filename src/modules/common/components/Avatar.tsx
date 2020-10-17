import * as React from "react";
import { Image } from "react-native";
import { RoundGradient } from ".";
import styled from "styled-components/native";
import { Colors } from "../styles";
import { getFirstLetter } from "../../helper";

const Letter = styled.Text`
  font-family: System;
  font-weight: bold;
  font-size: 25px;
  color: ${Colors.white};
  text-align: center;
`;

export const Mask = styled.View`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Colors.dark};
  borderRadius: 10;
  opacity: 0.4;
`;

export default function Avatar({
  image,
  placeholder,
}: {
  placeholder: string;
  image?: string;
}) {
  if (!image) {
    return (
      <RoundGradient size={50}>
        <Letter>{getFirstLetter(placeholder)}</Letter>
      </RoundGradient>
    );
  }

  return (
    <>
      <Mask />
      <Image source={{ uri: image }} style={avatarStyle} />
    </>
  );
}

const avatarStyle = {
  borderRadius: 10,
  width: '100%',
  height: 200,
  resizeMode: 'cover'
};
