import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você prefere calça <strong>Super SLIM,</strong> peças mais justas nas pernas ou somente o corte <strong>Corte Class</strong>, peças mais soltas nas pernas?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.PANTS,
    CLASSNAME: 'w-80 m-auto'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION11,
  OPTIONS: [
    { value: 1, label: 'Super Slim' },
    { value: 2, label: 'Class' },
    { value: 3, label: 'Ambas' },
  ],
}


function Question10() {
  return (
    <ButtonSingleChoice question={ question } hideBackground={true} />
  );
}

export default Question10;
