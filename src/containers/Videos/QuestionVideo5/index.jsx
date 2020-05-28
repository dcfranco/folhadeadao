import React, { Fragment } from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import Custom from 'builders/Question/Custom';

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
      CLASSNAME: 'mt-4 mb-3',
      RENDER: <Image src={AVAILABLE_IMAGES.MODEL_2} />,
    },
    {
      CODE: 'C002',
      COMPONENT: 'Text',
      CLASSNAME: 'text-normal mx-auto mt-5 mb-4 w-80 text-center',
      RENDER: (
        <Fragment>
          <span className='d-block text-primary font-weight-bold'>Pronto !</span>
          Agora que já conhece mais sobre nós, aguarde que entraremos em contato em até
          24h através do seus what's app para iniciar sua <strong className='text-primary'>consultoria online.</strong>
        </Fragment>
      ),
    }
  ],
}

function Video5() {
  return (
    <Custom question={question} />
  );
}

export default Video5;
