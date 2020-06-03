import React, { Fragment } from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import Custom from 'builders/Question/Custom';

const { AVAILABLE_IMAGES } = Image

const question = {
  CODE: 2,
  IMAGE: {
    SRC: AVAILABLE_IMAGES.MODEL_2,
    CLASSNAME: 'w-100',
  },
  TYPE: questionType.CUSTOM,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: `${routeCodes.QUESTIONS}${subRouteCodes.QUESTIONS.QUESTION3}`,
  CONTENT: [
    {
      CODE: 'C001',
      COMPONENT: 'Image',
      CLASSNAME: 'mb-3',
      RENDER: <Image src={AVAILABLE_IMAGES.LOGO_FULL} maxWidth='60%' />,
    },
    {
      CODE: 'C002',
      COMPONENT: 'Text',
      CLASSNAME: 'text-normal mt-auto text-center',
      RENDER: (
        <Fragment>
          'Adão foi o primeiro e mais exclusivo homem da terra, a folha foi o
          primeiro e mais exclusivo look do homem'
          <small className='d-block'>by marlon cristiano</small>
        </Fragment>
      ),
    },
    {
      CODE: 'C003',
      COMPONENT: 'Text',
      CLASSNAME: 'text-primary text-smaller text-center w-100 mt-auto mb-auto pb-3',
      RENDER: (
        <Fragment>
          Conheça agora sobre a <strong className='d-block'>grife mais exclusiva do mundo</strong>
        </Fragment>
      ),
    }
  ],
}

function Question20() {
  return (
    <Custom question={question} />
  );
}

export default Question20;