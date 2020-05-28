import React from 'react';
import { subRouteCodes } from 'constants/routeCodes';
import { questionType } from 'constants/questions';
import Video from 'builders/Question/Video';

const question = {
  TITLE: 'Conheça',
  TYPE: questionType.VIDEO,
  NEXT_CAPTION: 'Prosseguir',
  NEXT_ROUTE: subRouteCodes.VIDEOS.VIDEO2,
  TEXT: [
    'Após <strong>6 anos de pesquisa</strong> através de consultorias presenciais a folha de adão abre suas portas para os <strong>clientes digitais.</strong>',
    { className: 'text-primary w-75 mt-4', content: 'Assista o vídeo e prossiga...' },
  ],
  VIDEO_ID: 'mJlMLCjFZ8c',
}

function Video1() {
  return (
    <Video question={question} />
  );
}

export default Video1;
