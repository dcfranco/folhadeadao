import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Video from 'builders/Question/Video';

const question = {
  TITLE: 'Video',
  TYPE: questionType.VIDEO,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: subRouteCodes.QUESTIONS.QUESTION7,
  TEXT: [
    'Fábrica de armaduras, <br /> <strong className="d-block">consultoria online</strong> <strong className="d-block">& produtos.</strong>',
    { className: 'small mt-3', content: 'Personalize suas preferências e descubra o melhor da folha de adão para você' },
    { className: 'text-primary w-75 mt-3', content: 'Assista o vídeo e prossiga...' },
  ],
  VIDEO_ID: 'mJlMLCjFZ8c',
}

function Question6() {
  return (
    <Video question={question} />
  );
}

export default Question6;
