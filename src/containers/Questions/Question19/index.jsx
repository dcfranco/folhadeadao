import React, { useState } from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import { subRouteCodes } from 'constants/routeCodes';
import Custom from 'builders/Question/Custom';
import Question19Form from './Form';
import Button from 'components/Button';

const { AVAILABLE_IMAGES } = Image


function Question19CivilState() {
  const [civilState, updateCivilState] = useState(null);

  return (
    <div className='d-flex w-50 mx-auto mt-3 flex-column'>
      <Button className='d-block mb-2 p-0' selected={ civilState === 0 } onClick={ () => updateCivilState(0) }>solteiro</Button>
      <Button className='d-block mb-2 p-0' selected={ civilState === 1 } onClick={ () => updateCivilState(1) }>noivo</Button>
      <Button className='d-block mb-2 p-0' selected={ civilState === 2 } onClick={ () => updateCivilState(2) }>casado</Button>
    </div>
  );
}

const question = {
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  TITLE: 'Qual sua profissão e seu estado civíl? Pergunto isso por eventuais campanhas de benefícios segmentados.',
  TYPE: questionType.CUSTOM,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION20,
  CONTENT: [
    {
      CODE: 'C002',
      COMPONENT: 'Options',
      CLASSNAME: 'mt-auto mb-auto',
      RENDER: <Question19CivilState />,
    },
    {
      CODE: 'C003',
      CLASSNAME: 'mb-auto',
      COMPONENT: 'Form',
      RENDER: <Question19Form className='w-90' label='Qual sua profissão?' />,
    }
  ],
}

function Question19() {
  return (
    <Custom question={question}  />
  );
}

export default Question19;
