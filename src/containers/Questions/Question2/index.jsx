import React, { Fragment } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Button from 'components/Button';
import Footer from 'components/Footer';

function Question2() {
  return (
    <Fragment>
      <Header className='text-center'>
        <Header.Title className='w-100'>
          Video
        </Header.Title>
      </Header>
      <Question>
        <Question.Text>
          Após <strong>6 anos de pesquisa</strong> através de consultorias presenciais a
          folha de adão abre suas portas para os <strong>clientes digitais.</strong>
        </Question.Text>
        <Question.Text className='text-primary w-75 mt-4'>
          Assista o vídeo e prossiga...
        </Question.Text>
        <Question.Video>
          --Video--
        </Question.Video>
      </Question>
      <Footer>
        <Button onClick={() => {}}>
          Prosseguir
        </Button>
      </Footer>
    </Fragment>
  );
}

export default Question2;
