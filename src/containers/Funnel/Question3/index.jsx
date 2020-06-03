import React, { useContext, useEffect } from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ImageMultiplesChoices from 'builders/Question/ImageMultiplesChoices';
import { AppContext } from 'context/AppContext';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image;

const question = {
  CODE: 3,
  TITLE: 'Escolha <strong>5 cores</strong> que <strong>mais gosta</strong>, por ordem de preferência?',
  TYPE: questionType.IMAGE_MULTIPLE_CHOICE,
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  CLASSNAME: 'text-normal w-100',
  NEXT_CAPTION: 'Próxima',
  MAX: 5,
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION4,
  OPTIONS_CLASSNAME: 'w-20 m-1',
  OPTIONS: [
    { value: 1, image: AVAILABLE_IMAGES.A, label: 'A' },
    { value: 2, image: AVAILABLE_IMAGES.B, label: 'B' },
    { value: 3, image: AVAILABLE_IMAGES.C, label: 'C' },
    { value: 4, image: AVAILABLE_IMAGES.D, label: 'D' },
    { value: 5, image: AVAILABLE_IMAGES.E, label: 'E' },
    { value: 6, image: AVAILABLE_IMAGES.F, label: 'F' },
    { value: 7, image: AVAILABLE_IMAGES.G, label: 'G' },
    { value: 8, image: AVAILABLE_IMAGES.H, label: 'H' },
    { value: 9, image: AVAILABLE_IMAGES.I, label: 'I' },
    { value: 10, image: AVAILABLE_IMAGES.J, label: 'J' },
    { value: 12, image: AVAILABLE_IMAGES.L, label: 'L' },
    { value: 13, image: AVAILABLE_IMAGES.M, label: 'M' },
    { value: 14, image: AVAILABLE_IMAGES.N, label: 'N' },
    { value: 15, image: AVAILABLE_IMAGES.O, label: 'O' },
    { value: 16, image: AVAILABLE_IMAGES.P, label: 'P' },
  ],
}

function Question3() {
  const {toggleBackgroundVisible} = useContext(AppContext);
  const {question: result, update} = useQuestion(3)

  useEffect(() => toggleBackgroundVisible(false), [toggleBackgroundVisible]);
  return (
    <ImageMultiplesChoices question={question} selected={result.value || []} updateSelected={(value) => update({ value })} />
  );
}

export default Question3;
