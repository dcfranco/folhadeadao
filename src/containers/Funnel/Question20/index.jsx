import React from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import Custom from 'builders/Question/Custom';
import Question20Form from './Form';
import Button from 'components/Button';
import { useQuestion } from 'context/QuestionContext';

const { AVAILABLE_IMAGES } = Image

function Question20CivilState() {
  const { question, update } = useQuestion(20);

  return (
    <div className='d-flex w-50 mx-auto mt-3 flex-column'>
      <Button className='d-block mb-2 p-0' selected={ question.civilState === 1 } onClick={ () => update({ civilState: 1 }) }>solteiro</Button>
      <Button className='d-block mb-2 p-0' selected={ question.civilState === 2 } onClick={ () => update({ civilState: 2 }) }>noivo</Button>
      <Button className='d-block mb-2 p-0' selected={ question.civilState === 3 } onClick={ () => update({ civilState: 3 }) }>casado</Button>
    </div>
  );
}

const question = {
  CODE: 20,
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  TITLE: 'Qual sua profissão e seu estado civíl? Pergunto isso por eventuais campanhas de benefícios segmentados.',
  TYPE: questionType.CUSTOM,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: `${routeCodes.QUESTIONS}${subRouteCodes.QUESTIONS.QUESTION21}`,
  CONTENT: [
    {
      CODE: 'C002',
      COMPONENT: 'Options',
      CLASSNAME: 'mt-auto mb-auto',
      RENDER: <Question20CivilState />,
    },
    {
      CODE: 'C003',
      CLASSNAME: 'mb-auto',
      COMPONENT: 'Form',
      RENDER: <Question20Form className='w-90' label='Qual sua profissão?' />,
    }
  ],
}

function Question20() {
  const { question: result } = useQuestion(20);

  return (
    <Custom question={question} disabled={ !result.civilState || !result.profession } />
  );
}

export default Question20;
