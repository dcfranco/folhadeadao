import React, { useMemo, useContext } from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from 'context/QuestionContext';
import { InfoContext } from 'context/InfoContext';

const { AVAILABLE_IMAGES } = Image

const questionCreator = (username) => ({
  CODE: 1,
  TITLE: `Olá <strong class="text-primary">${username}</strong>, o quanto você <strong>gosta de moda ?</strong>`,
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
})

function Question1() {
  const { userInfo } = useContext(InfoContext)
  const question = useMemo(() => questionCreator(userInfo.firstName), [userInfo])
  const {question: result, update} = useQuestion(question.CODE)

  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question1;
