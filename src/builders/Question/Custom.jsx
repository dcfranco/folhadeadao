import React, { Fragment } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import { useHistory } from 'react-router-dom';
import routeCodes from 'constants/routeCodes';

function Custom({ question }) {
  const history = useHistory();

  return (
    <Fragment>
      <Header className='text-center'>
        <Header.Logo className={question.IMAGE.SRC}>
          <Image src={question.IMAGE.SRC} />
        </Header.Logo>
      </Header>
      <Question>
        { question.CONTENT.map((content) => {
          if (content.COMPONENT === 'Image') {
            return (
              <Question.Image key={content.CODE} className={ content.CLASSNAME }>
                { content.RENDER }
              </Question.Image>
            )
          }

          if (content.COMPONENT === 'Text') {
            return (
              <Question.Text key={content.CODE} className={ content.CLASSNAME }>
                { content.RENDER }
              </Question.Text>
            )
          }

          return null
        })}
      </Question>
      <Footer>
        <Button onClick={ () => history.push(`${routeCodes.QUESTIONS}${question.NEXT_ROUTE}`) }>
          { question.NEXT_CAPTION }
        </Button>
      </Footer>
    </Fragment>
  );
}

export default Custom;
