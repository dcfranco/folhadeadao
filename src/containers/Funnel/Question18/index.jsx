
import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image;

const question = {
  CODE: 18,
  TITLE: 'Você usa ou usaria o estilo que as calças de alfaiataria oferecem ?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.PANTS_2,
    CLASSNAME: 'w-80 mx-auto mt-2 mb-3'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal text-center w-100',
  OPTIONS_CLASSNAME: 'mb-auto mt-2',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION19,
  OPTIONS: [
    { value: 1, label: 'Sim' },
    { value: 2, label: 'Não' },
  ],
}


function Question18() {
  const {question: result, update} = useQuestion(18)
  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question18;