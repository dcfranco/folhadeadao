
import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você usaria a <strong>Camisa Premium</strong>, peça com leve brilho?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.GLOW,
    CLASSNAME: 'w-100 mt-3 mb-3'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  OPTIONS_CLASSNAME: 'mb-auto mt-5',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION16,
  OPTIONS: [
    { value: 1, label: 'Sim' },
    { value: 2, label: 'Não' },
  ],
}


function Question15() {
  const {question: result, update} = useQuestion(15)
  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question15;
