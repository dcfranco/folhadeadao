import React, { Fragment, useContext, useEffect } from 'react';
import Image from 'components/Image';
import Button from 'components/Button';
import { questionType } from 'constants/questions';
import Custom from 'builders/Question/Custom';
import { AppContext } from 'context/AppContext';
import routeCodes from 'constants/routeCodes';
import { useHistory } from 'react-router-dom';

const { AVAILABLE_IMAGES } = Image

function Question21Button() {
  const history = useHistory();

  return (
    <Button onClick={ () => history.push(routeCodes.VIDEOS) } isSecondary={true} className='text-normal w-100 mt-3'>
      Conheça mais sobre a grife
    </Button>
  );
}

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
      CLASSNAME: 'mt-4 mb-2',
      RENDER: <Image src={AVAILABLE_IMAGES.MODEL_2} />,
    },
    {
      CODE: 'C002',
      COMPONENT: 'Text',
      CLASSNAME: 'text-normal mx-auto mt-4 mb-4 w-80 text-center',
      RENDER: (
        <Fragment>
          <span className='d-block'>Pronto !</span>
          Agora que conhecemos mais sobre você, entraremos em contato em até 24h
          através do seu what's app para iniciar sua <strong>consultoria online.</strong>
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

function Question21() {
  const {toggleBackgroundVisible} = useContext(AppContext);

  useEffect(() => toggleBackgroundVisible(true), [toggleBackgroundVisible]);
  return (
    <Custom question={question} />
  );
}

export default Question21;
