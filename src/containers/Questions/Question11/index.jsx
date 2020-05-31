import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Você usa Terno?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.SUIT,
    CLASSNAME: 'w-100 mt-3 mb-3'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  OPTIONS_CLASSNAME: 'mb-auto mt-4',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION12,
  OPTIONS: [
    { value: 1, label: 'Sim, muito' },
    { value: 2, label: 'não' },
    { value: 3, label: 'as vezes' },
  ],
}

function Question11() {
  const {question: result, update} = useQuestion(11)

  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question11;
