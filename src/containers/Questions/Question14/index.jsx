
import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from '../Context';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Usa GOLA POLO? <br /><br /><strong>AVIADOR</strong> é corte executivo de camisetas.',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.AVIATOR,
    CLASSNAME: 'w-100 mt-3 mb-3'
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
  const {question: result, update} = useQuestion(14)
  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question14;
