import React, { useContext, useEffect } from 'react';
import Image from 'components/Image';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import ButtonSingleChoice from 'builders/Question/ButtonSingleChoice';
import Question9Form from './Form';
import { AppContext } from 'context/AppContext';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image;

const question = {
  CODE: 9,
  TITLE: 'Você gostaria de uma camiseta estampada com qual tema?',
  TYPE: questionType.CUSTOM,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.MODEL_3,
    CLASSNAME: 'responsive-img pb-2 pt-0 px-3 mx-auto'
  },
  CLASSNAME: 'text-normal text-center w-100',
  NEXT_CAPTION: 'Próxima',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION10,
  OPTIONS_CLASSNAME: 'd-flex flex-wrap my-auto p-0',
  OPTION_CLASSNAME: 'w-33 mx-1 my-1 py-0',
  OPTIONS: [
    { value: 1, label: 'música' },
    { value: 2, label: 'oceano' },
    { value: 3, label: 'caveiras' },
    { value: 4, label: 'idolos' },
    { value: 5, label: 'poker' },
    { value: 6, label: 'samurai' },
    { value: 7, label: 'frases' },
    { value: 8, label: 'animais' },
    { value: 9, label: 'heróis' },
  ],
  CLASSNAME_FORM: 'mb-auto pb-3',
  FORM: <Question9Form label='Algum pedido especial ?' />
}

function Question9() {
  const {toggleBackgroundVisible} = useContext(AppContext);
  const {question: result, update} = useQuestion(9)

  useEffect(() => toggleBackgroundVisible(false), [toggleBackgroundVisible]);
  return (
    <ButtonSingleChoice question={question} unblock={result.request} selected={result.theme} updateSelected={(value) => update({ theme: value })}/>
  );
}

export default Question9;
