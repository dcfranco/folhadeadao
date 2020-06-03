import React, { Fragment, useContext, useEffect } from 'react';
import Image from 'components/Image';
import Button from 'components/Button';
import { questionType } from 'constants/questions';
import Custom from 'builders/Question/Custom';
import { AppContext } from 'context/AppContext';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import { useHistory } from 'react-router-dom';
import { InfoContext } from 'context/InfoContext';

const { AVAILABLE_IMAGES } = Image

const Question21Button = React.memo(() => {
  const history = useHistory();
  const { finishFunnel } = useContext(InfoContext)

  return (
    <Button
      onClick={ () => {
        finishFunnel()
        history.push(`${routeCodes.VIDEOS}${subRouteCodes.VIDEOS.VIDEO1}`) 
      }}
      className='text-normal font-weight-bold w-100 mt-3'
    >
      Conheça mais sobre a grife
    </Button>
  );
})

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
          <span className='d-block text-primary font-weight-bold'>Pronto !</span>
          Agora que conhecemos mais sobre você, entraremos em contato em até 24h
          através do seu what's app para iniciar sua <strong className='text-primary'>consultoria online.</strong>
        </Fragment>
      ),
    },
    {
      CODE: 'C003',
      COMPONENT: 'Element',
      RENDER: (
        <Question21Button />
      ),
    }
  ],
}

const Question21 = React.memo(() => {
  const {toggleBackgroundVisible} = useContext(AppContext);

  useEffect(() => toggleBackgroundVisible(true), [toggleBackgroundVisible]);
  return (
    <Custom question={question} />
  );
})

export default Question21;
