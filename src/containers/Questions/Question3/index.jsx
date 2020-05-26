import React, { Fragment } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';

const { AVAILABLE_IMAGES } = Image

function Question3() {
  return (
    <Fragment>
      <Header className='text-center'>
        <Header.Logo className='w-100'>
          <Image src={AVAILABLE_IMAGES.MODEL_2} />
        </Header.Logo>
      </Header>
      <Question>
        <Question.Image className='mt-3 mb-3'>
          <Image src={AVAILABLE_IMAGES.LOGO_FULL} maxWidth='60%' />
        </Question.Image>
        <Question.Text className='text-normal text-right'>
          'Adão foi o primeiro e mais exclusivo homem da terra, a folha foi o
          primeiro e mais exclusivo look do homem'
          <small className='d-block'>by marlon cristiano</small>
        </Question.Text>
        <Question.Text className='text-primary text-smaller text-center w-100 mt-auto pb-2'>
          Conheça agora sobre a <strong className='d-block'>grife mais exclusiva do mundo</strong>
        </Question.Text>
      </Question>
      <Footer>
        <Button onClick={() => {}}>
          Prosseguir
        </Button>
      </Footer>
    </Fragment>
  );
}

export default Question3;
