import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoiceDesc from 'builders/Question/ButtonSingleChoiceDesc';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você gosta do <strong>Corte Boleiro</strong>?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE_DESCRIPTION,
  NEXT_CAPTION: 'Próxima',
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  IMAGE: {
    SRC: AVAILABLE_IMAGES.SHIRT_BOLEIRO,
    CLASSNAME: 'w-65 position-absolute ml-n3',
  },
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION7,
  DESCRIPTION: [
    { className: 'd-block font-weight-bold mb-3', content: 'Corte Boleiro' },
    { className: 'd-block', content: 'Destaca Ombros' },
    { className: 'd-block', content: 'Caimento Justo' },
    '17 Cores'
  ],
  OPTIONS: [
    { value: 1, label: 'não uso' },
    { value: 2, label: 'talvez' },
    { value: 3, label: 'sim, uso' },
  ],
}


function Question6() {
  return (
    <ButtonSingleChoiceDesc question={ question } />
  );
}

export default Question6;
