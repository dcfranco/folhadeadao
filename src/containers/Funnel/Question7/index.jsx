import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Image from 'components/Image';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image;

const question = {
  CODE: 7,
  TITLE: 'Você prefere calça <strong>Super SLIM,</strong> peças mais justas nas pernas ou somente o corte <strong>Corte Class</strong>, peças mais soltas nas pernas?',
  TYPE: questionType.BUTTON_SINGLE_CHOICE,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.PANTS,
    CLASSNAME: 'pb-4 px-4 mx-auto'
  },
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION8,
  OPTIONS: [
    { value: 1, label: 'Super Slim' },
    { value: 2, label: 'Class' },
    { value: 3, label: 'Ambas' },
  ],
}


function Question7() {
  const {question: result, update} = useQuestion(7)
  return (
    <ButtonSingleChoice question={question} selected={result.value} updateSelected={(value) => update({ value })}/>
  );
}

export default Question7;
