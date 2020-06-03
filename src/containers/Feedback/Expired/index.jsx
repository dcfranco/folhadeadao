import React, { Fragment, useContext, useEffect } from 'react';
import Image from 'components/Image';
import { questionType } from 'constants/questions';
import Custom from 'builders/Question/Custom';
import { AppContext } from 'context/AppContext';
import { useHistory } from 'react-router-dom';
import routeCodes, { subRouteCodes } from 'constants/routeCodes';
import Button from 'components/Button';

const { AVAILABLE_IMAGES } = Image

const FeedbackExpiredButton = React.memo(() => {
  const history = useHistory();
  return (
    <Button
      onClick={ () => history.push(`${routeCodes.VIDEOS}${subRouteCodes.VIDEOS.VIDEO1}`) }
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
          <span className='d-block text-primary font-weight-bold d-block mb-4'>Você já efetuou a pesquisa</span>
          Agora que conhecemos mais sobre você, entraremos em contato em até 24h
          através do seu what's app para iniciar sua <strong className='text-primary'>consultoria online.</strong>
        </Fragment>
      ),
    },
    {
      CODE: 'C003',
      COMPONENT: 'Element',
      RENDER: (
        <FeedbackExpiredButton />
      ),
    }
  ],
}

const FeedbackExpired = React.memo(() => {
  const {toggleBackgroundVisible} = useContext(AppContext);
  useEffect(() => toggleBackgroundVisible(true), [toggleBackgroundVisible]);
  return (
    <Custom question={question} />
  );
})

export default FeedbackExpired;
