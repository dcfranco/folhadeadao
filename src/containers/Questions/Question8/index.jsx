import React from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ImageMultiplesChoices from 'builders/Question/ImageMultiplesChoices';
import { useQuestion } from '../Context';

const { AVAILABLE_IMAGES } = Image;

const question = {
  TITLE: 'Escolha <strong>3 modelos</strong> que você mais gostou, por ordem de preferência:',
  TYPE: questionType.IMAGE_MULTIPLE_CHOICE,
  CLASSNAME: 'text-normal mb-3 w-100',
  NEXT_CAPTION: 'Próxima',
  MAX: 3,
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION9,
  OPTIONS_CLASSNAME: 'w-30 m-1',
  OPTIONS: [
    { value: 1, image: AVAILABLE_IMAGES.SHOES_1, label: 'A' },
    { value: 2, image: AVAILABLE_IMAGES.SHOES_2, label: 'B' },
    { value: 3, image: AVAILABLE_IMAGES.SHOES_3, label: 'C' },
    { value: 4, image: AVAILABLE_IMAGES.SHOES_4, label: 'D' },
    { value: 5, image: AVAILABLE_IMAGES.SHOES_5, label: 'E' },
    { value: 6, image: AVAILABLE_IMAGES.SHOES_6, label: 'F' },
    { value: 7, image: AVAILABLE_IMAGES.SHOES_7, label: 'G' },
    { value: 8, image: AVAILABLE_IMAGES.SHOES_8, label: 'H' },
    { value: 9, image: AVAILABLE_IMAGES.SHOES_9, label: 'I' },
  ],
}

function Question8() {
  const {question: result, update} = useQuestion(8)
  return (
    <ImageMultiplesChoices question={question} selected={result.value || []} updateSelected={(value) => update({ value })} />
  );
}

export default Question8;
