import React from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ImageMultiplesChoices from 'builders/Question/ImageMultiplesChoices';
import { useQuestion } from '../Context';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Quais produtos você tem maior necessidade no momento, escolha 3 por ordem de prioridade:',
  TYPE: questionType.IMAGE_MULTIPLE_CHOICE,
  CLASSNAME: 'text-normal mx-auto w-100',
  NEXT_CAPTION: 'Próxima',
  MAX: 3,
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION20,
  OPTIONS_CLASSNAME: 'w-30 m-1',
  OPTIONS: [
    { value: 1, image: AVAILABLE_IMAGES.BLANK_SHIRTS, label: 'A' },
    { value: 2, image: AVAILABLE_IMAGES.BLANK_PANTS, label: 'B' },
    { value: 3, image: AVAILABLE_IMAGES.BLANK_JACKET, label: 'C' },
    { value: 4, image: AVAILABLE_IMAGES.BLANK_T_SHIRTS, label: 'D' },
    { value: 5, image: AVAILABLE_IMAGES.BLANK_SUITS, label: 'E' },
    { value: 6, image: AVAILABLE_IMAGES.BLANK_SHORTS, label: 'F' },
    { value: 7, image: AVAILABLE_IMAGES.BLANK_SHOES, label: 'G' },
    { value: 8, image: AVAILABLE_IMAGES.BLANK_GLASSES, label: 'H' },
    { value: 9, image: AVAILABLE_IMAGES.BLANK_PERFUME, label: 'I' },
  ],
}

function Question19() {
  const {question: result, update} = useQuestion(19)
  return (
    <ImageMultiplesChoices question={question} selected={result.value || []} updateSelected={(value) => update({ value })} />
  );
}

export default Question19;
