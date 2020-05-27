import React from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import Question9Form from './Form';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você gostaria de uma camiseta estampada com qual tema?',
  TYPE: questionType.CUSTOM,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.MODEL_3,
    CLASSNAME: 'w-80 h-50 mx-auto'
  },
  CLASSNAME: 'text-normal text-center w-100 ',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION10,
  OPTIONS_CLASSNAME: 'd-flex flex-wrap my-auto',
  OPTION_CLASSNAME: 'w-33 mx-1 my-1',
  OPTIONS: [
    { value: 1, label: 'música' },
    { value: 2, label: 'oceano' },
    { value: 3, label: 'caveiras' },
    { value: 4, label: 'idolos' },
    { value: 5, label: 'poker' },
    { value: 6, label: 'samurai' },
    { value: 7, label: 'frases' },
    { value: 8, label: 'animais' },
    { value: 9, label: 'super heroi' },
  ],
  FORM: <Question9Form className='my-2' label='Algum pedido especial ?' />
}

function Question9() {
  return (
    <ButtonSingleChoice question={question} hideBackground={true} />
  );
}

export default Question9;
