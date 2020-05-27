import React from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image

const question = {
  TITLE: 'Olá <strong>Daniel</strong>, o quanto você <strong>gosta de moda ?</strong>',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: AVAILABLE_IMAGES.MODEL,
  NEXT_CAPTION: 'Iniciar Consultoria',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION2,
  OPTIONS: [
    { value: 1, label: 'pouco' },
    { value: 2, label: 'médio' },
    { value: 3, label: 'muito' },
  ]
}

function Question1() {
  return (
    <ButtonSingleChoice question={question} />
  );
}

export default Question1;
