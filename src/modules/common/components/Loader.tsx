import * as React from 'react';
import styled from 'styled-components/native';
import ContentLoader from "react-native-easy-content-loader";
import { Colors } from '../styles';
import utils from '../utils';

const { screenWidth, screenHeight } = utils.getDimensions();

const Layout = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${screenWidth/3}px 20px;
`;

const pWidth = screenWidth - 60;

const loaderProps = {
  active: true,
  secondaryColor: Colors.gray,
  animationDuration: 700,
  listSize: 1,
  pRows: 4,
  pHeight: [screenHeight/2.5, 15, 15, 15],
  pWidth: [pWidth, pWidth, pWidth]
};

export default function Loader() {
  return (
    <Layout>
      <ContentLoader {...loaderProps} />
    </Layout>
  );
}