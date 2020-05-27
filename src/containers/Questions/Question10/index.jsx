import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você usa Paletó?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.JACKET,
    CLASSNAME: 'w-100 mt-3'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION11,
  OPTIONS: [
    { value: 1, label: 'Sim, muito' },
    { value: 2, label: 'não' },
    { value: 3, label: 'as vezes' },
  ],
}


function Question11() {
  return (
    <ButtonSingleChoice question={ question }  />
  );
}

export default Question11;
