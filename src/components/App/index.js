/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap";

import getImg from "../../utils/getImg";
import getRandomInRange from "../../utils/getRandomRange";

import "./styles.css";

export default () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(0);
  const [image, setImage] = useState(false);

  const generateQuestion = () => {
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const answ = num1 + num2;
    const text = `${num1} + ${num2} = `;

    setQuestion({
      num1,
      num2,
      answ,
      text
    });
  };

  const restart = () => {
    generateQuestion();
    setResult(0);
    setAnswer("");
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const onChange = e => setAnswer(e.target.value);

  const sendAnswer = () => {
    let res;
    let img;

    if (answer.toString() !== question.answ.toString()) {
      res = "Cat";
      img = getImg("Cat");
    } else {
      res = "Animatronik";
      img = getImg("Animatronik");
    }

    setImage(img);

    setResult(res);
  };

  if (result !== 0) {
    return (
      <div className="img">
        <img
          src={image}
          alt="картинка тут"
          onClick={restart}
          onKeyDown={restart}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <InputGroup size="lg">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  {question ? question.text : "Сборка примера"}
                </InputGroupText>
              </InputGroupAddon>
              <Input value={answer} onChange={onChange} />
            </InputGroup>

            <Button color="primary" size="lg" block onClick={sendAnswer}>
              Ответ
            </Button>

            <Button outline color="danger" block onClick={generateQuestion}>
              Замена примера
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
