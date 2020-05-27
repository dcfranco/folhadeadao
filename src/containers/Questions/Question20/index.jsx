import React, { Fragment, useContext, useEffect } from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import Custom from 'builders/Question/Custom';
import { AppContext } from 'context/AppContext';

const { AVAILABLE_IMAGES } = Image

const question = {
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  TYPE: questionType.CUSTOM,
  CONTENT: [
    {
      CODE: 'C001',
      COMPONENT: 'Image',
      CLASSNAME: 'my-auto',
      RENDER: <Image src={AVAILABLE_IMAGES.MODEL_2} />,
    },
    {
      CODE: 'C002',
      COMPONENT: 'Text',
      CLASSNAME: 'text-normal mx-auto',
      RENDER: (
        <Fragment>
          Obrigado!
        </Fragment>
      ),
    },
    {
      CODE: 'C003',
      COMPONENT: 'Text',
      CLASSNAME: 'text-normal mx-auto mb-auto mt-5 w-80 text-center',
      RENDER: (
        <Fragment>
          Entraremos em contato em até 24h através do seu what's app para iniciar sua consultoria e liberar suas compras.
        </Fragment>
      ),
    }
  ],
}

function Question20() {
  const {toggleBackgroundVisible} = useContext(AppContext);

  useEffect(() => toggleBackgroundVisible(true), [toggleBackgroundVisible]);
  return (
    <Custom question={question} />
  );
}

export default Question20;
