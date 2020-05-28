import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você usa com mais frequência <strong>camisetas</strong> ou <strong>camisas</strong> para sair em eventos, baladas, jantares, barzinhos, etc?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.SHIRT_T_SHIRT,
    CLASSNAME: 'w-100 mt-3 mb-3'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION13,
  OPTIONS: [
    { value: 1, label: 'Camiseta' },
    { value: 2, label: 'Camisa' },
  ],
}


function Question12() {
  return (
    <ButtonSingleChoice question={ question }  />
  );
}

export default Question12;
