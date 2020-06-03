import React, { Fragment, useCallback, useContext } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import { useHistory, useRouteMatch } from 'react-router-dom';
import routeCodes from 'constants/routeCodes';
import { InfoContext } from 'context/InfoContext';

function Custom({ question, disabled, value = 'true' }) {
  const history = useHistory();
  const { url: path } = useRouteMatch(`${routeCodes.FUNNEL}`)
  const { nextQuestion } = useContext(InfoContext)
  
  const onNext = useCallback(() => {
    nextQuestion(question.CODE)
    history.push(`${path}${question.NEXT_ROUTE}`, { code: question.CODE })
  }, [history, nextQuestion, path, question.CODE, question.NEXT_ROUTE])

  return (
    <Fragment>
      {typeof question.LOGO === 'object' ? (
        <Header className='text-center mt-0'>
          <Header.Logo className={question.LOGO.CLASSNAME}>
            <Image src={question.LOGO.SRC} maxWidth='90px' />
          </Header.Logo>
          { question.TITLE && (
            <Header.Title className='text-normal w-100 mt-3 mb-0'>
              <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
            </Header.Title>
          )}
        </Header>
      ) : (
        <Header>
          { question.TITLE && (
            <Header.Title className={question.CLASSNAME}>
              <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
            </Header.Title>
          )}
        </Header>
      )}
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

          if (content.COMPONENT === 'Form') {
            return (
              <Question.Form key={content.CODE} className={ content.CLASSNAME }>
                { content.RENDER }
              </Question.Form>
            )
          }

          if (content.COMPONENT === 'Options') {
            return (
              <Question.Options key={content.CODE} className={ content.CLASSNAME }>
                { content.RENDER }
              </Question.Options>
            )
          }

          if (content.COMPONENT === 'Element') {
            return (
              <Fragment key={content.CODE}>
                { content.RENDER }
              </Fragment>
            )
          }

          return null
        })}
      </Question>
      <Footer>
        { question.NEXT_ROUTE && (
          <Button onClick={onNext} disabled={ disabled }>
            { question.NEXT_CAPTION }
          </Button>
        )}
      </Footer>
    </Fragment>
  );
}

export default Custom;
