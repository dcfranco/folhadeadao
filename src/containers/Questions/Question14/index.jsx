
import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Usa GOLA POLO? <br /><br /><strong>AVIADOR</strong> é corte executivo de camisetas.',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.AVIATOR,
    CLASSNAME: 'w-100 mt-4'
  },
  CLASSNAME: 'text-normal text-left w-100 mt-4',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION15,
  OPTIONS: [
    { value: 1, label: 'Não uso' },
    { value: 2, label: 'Sim, gostaria' },
  ],
}


function Question14() {
  return (
    <ButtonSingleChoice question={ question }  />
  );
}

export default Question14;
