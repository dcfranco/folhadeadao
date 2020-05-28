import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Video from 'builders/Question/Video';

const question = {
  TITLE: 'Assista',
  TYPE: questionType.VIDEO,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: subRouteCodes.VIDEOS.VIDEO3,
  TEXT: [
    '<strong className="d-block">Clientes excepcionais </strong>, <br /> consultoria & <br /> exclusividade ao extremo',
    { className: 'mt-3', content: 'Sempre foram nossa missão', },
    { className: 'text-primary w-75 mt-3', content: 'Assista o vídeo e prossiga...' },
  ],
  VIDEO_ID: 'mJlMLCjFZ8c',
}

function Video2() {
  return (
    <Video question={question} />
  );
}

export default Video2;
