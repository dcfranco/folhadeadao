
import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você usa camisa com tecidos <strong>trabalhados</strong>?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.WORKED_FABRICS,
    CLASSNAME: 'w-100 mt-3 mb-3'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION18,
  OPTIONS: [
    { value: 1, label: 'Sim' },
    { value: 2, label: 'Não' },
  ],
}


function Question17() {
  return (
    <ButtonSingleChoice question={ question }  />
  );
}

export default Question17;
