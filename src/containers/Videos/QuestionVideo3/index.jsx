import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Video from 'builders/Question/Video';

const question = {
  TITLE: 'Conheça',
  TYPE: questionType.VIDEO,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: subRouteCodes.VIDEOS.VIDEO4,
  TEXT: [
    'Exclusividade ao extremo, <br /> <strong className="d-block">pioneirismo</strong> & <strong className="d-block">originalidade.</strong>',
    { className: 'text-primary w-75 mt-3', content: 'Assista o vídeo e prossiga...' },
  ],
  VIDEO_ID: 'mJlMLCjFZ8c',
}

function Video3() {
  return (
    <Video question={question} />
  );
}

export default Video3;
