import React, { Fragment, useState } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Button from 'components/Button';
import Footer from 'components/Footer';
import { useHistory } from 'react-router-dom';
import routeCodes from 'constants/routeCodes';

function Video({ question }) {
  const [isEnabled, toggleEnabled] = useState(true);
  const history = useHistory();

  return (
    <Fragment>
      <Header className='text-center'>
        <Header.Title className='w-100'>
          <span dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
        </Header.Title>
      </Header>
      <Question>
        { question.TEXT.map((q) => {
          if (typeof q === 'object') {
            return (
              <Question.Text className={ q.className }>
                <span dangerouslySetInnerHTML={ {  __html: q.content } } />
              </Question.Text>
            )
          }

          if (typeof q === 'string') {
            return (
              <Question.Text>
                <span dangerouslySetInnerHTML={ {  __html: q } } />
              </Question.Text>
            )
          }

          return null
        })}
        <Question.Video className='mt-3' videoId={ question.VIDEO_ID } onPlay={ () => toggleEnabled(false) } />
      </Question>
      <Footer>
        <Button disabled={ isEnabled } onClick={ () => history.push(`${routeCodes.QUESTIONS}${question.NEXT_ROUTE}`) }>
          { question.NEXT_CAPTION }
        </Button>
      </Footer>
    </Fragment>
  );
}

export default Video;
