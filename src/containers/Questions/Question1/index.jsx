import React from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image

const question = {
  TITLE: 'Olá <strong class="text-primary">Daniel</strong>, o quanto você <strong>gosta de moda ?</strong>',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.MODEL,
    CLASSNAME: 'w-80 mx-auto mb-4'
  },
  NEXT_CAPTION: 'Iniciar Consultoria',
  CLASSNAME: 'text-smaller text-left w-65',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION2,
  OPTIONS: [
    { value: 1, label: 'pouco' },
    { value: 2, label: 'médio' },
    { value: 3, label: 'muito' },
  ]
}

function Question1() {
  const {question: result, update} = useQuestion(1)
  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question1;
