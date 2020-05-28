import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoiceDesc from 'builders/Question/ButtonSingleChoiceDesc';
import { useQuestion } from '../Context';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você gosta do <strong>Corte Canoa</strong>?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE_DESCRIPTION,
  NEXT_CAPTION: 'Próxima',
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  IMAGE: {
    MAX_WIDTH: '205px',
    SRC: AVAILABLE_IMAGES.SHIRT_CANOA,
    CLASSNAME: 'w-65 position-absolute ml-n1',
  },
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION6,
  DESCRIPTION: [
    { className: 'd-block font-weight-bold mb-3', content: 'Corte Canoa' },
    { className: 'd-block', content: 'Destaca Trapézio' },
    { className: 'd-block', content: 'Caimento Solto' },
    '17 Cores'
  ],
  OPTIONS: [
    { value: 1, label: 'não uso' },
    { value: 2, label: 'talvez' },
    { value: 3, label: 'sim, uso' },
  ],
}


function Question5() {
  const {question: result, update} = useQuestion(5)
  return (
    <ButtonSingleChoiceDesc question={question} selected={result.value} updateSelected={(value) => update({ value })} />
  );
}

export default Question5;
