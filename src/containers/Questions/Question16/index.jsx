
import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você usa camisa com <strong>estampa</strong>?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.IMPRESS,
    CLASSNAME: 'w-100 mt-4'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION17,
  OPTIONS: [
    { value: 1, label: 'Sim' },
    { value: 2, label: 'Não' },
  ],
}


function Question16() {
  return (
    <ButtonSingleChoice question={ question } hideBackground={true} />
  );
}

export default Question16;
