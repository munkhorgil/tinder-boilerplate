import axios from "axios";
import { Dimensions } from "react-native";
import { URL } from "../../constants";
import { User } from "../../types";

export const sendRequest = async (type: string): Promise<User[]> => {
  console.log(`${URL}/${type}`)
  try {
    const { data } = await axios({
      url: `${URL}/${type}`,
      method: "GET",
      headers: {
        "Content-Type": 'application/json',
      },
    });

    return data[type];
  } catch (e) {
    throw e;
  }
};

const getDimensions = (): { screenWidth: number; screenHeight: number } => {
  const { width, height } = Dimensions.get("window");

  return {
    screenWidth: width,
    screenHeight: height,
  };
};

export default {
  getDimensions,
};
