import getRandomInRange from "./getRandomRange";
import animatroniks from "../data/animatroniks";
import cats from "../data/cats";

export default name => {
  let data;

  if (name === "Animatronik") {
    data = animatroniks;
  } else {
    data = cats;
  }

  const l = data.length;
  const index = getRandomInRange(0, l - 1);

  return data[index];
};
