import React, { Fragment } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';

const { AVAILABLE_IMAGES } = Image

function Question4() {
  return (
    <Fragment>
      <Header>
        <Header.Title>
          O quanto você <strong>gosta de moda ?</strong>
        </Header.Title>
      </Header>
      <Question>
        <Question.Image>
          <Image src={AVAILABLE_IMAGES.MODEL} />
        </Question.Image>
        <Question.Options>
          <Button onClick={() => {}}>
            pouco
          </Button>
          <Button onClick={() => {}}>
            médio
          </Button>
          <Button onClick={() => {}}>
            muito
          </Button>
        </Question.Options>
      </Question>
      <Footer>
        <Button onClick={() => {}}>
          Iniciar Consultoria
        </Button>
      </Footer>
    </Fragment>
  );
}

export default Question4;
