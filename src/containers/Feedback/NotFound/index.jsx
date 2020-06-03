import React, { Fragment, useContext, useEffect } from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import Custom from 'builders/Question/Custom';
import { AppContext } from 'context/AppContext';

const { AVAILABLE_IMAGES } = Image

const question = {
  CODE: 21,
  LOGO: {
    SRC: AVAILABLE_IMAGES.LOGO,
    CLASSNAME: 'logo',
  },
  TYPE: questionType.CUSTOM,
  CONTENT: [
    {
      CODE: 'C001',
      COMPONENT: 'Image',
      CLASSNAME: 'mt-4 mb-2',
      RENDER: <Image src={AVAILABLE_IMAGES.MODEL_2} />,
    },
    {
      CODE: 'C002',
      COMPONENT: 'Text',
      CLASSNAME: 'text-normal mx-auto mt-4 mb-4 w-80 text-center',
      RENDER: (
        <Fragment>
          <span className='d-block text-primary font-weight-bold mb-4'>Funíl não encontrado!</span>
          Por favor, confirme o endereço com seu consultor
        </Fragment>
      ),
    }
  ],
}

const FeedbackNotFound = React.memo(() => {
  const {toggleBackgroundVisible} = useContext(AppContext);
  useEffect(() => toggleBackgroundVisible(true), [toggleBackgroundVisible]);
  return (
    <Custom question={question} />
  );
})

export default FeedbackNotFound;
