import React, { Fragment, useEffect, useContext, useCallback } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import routeCodes from 'constants/routeCodes';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { AppContext } from 'context/AppContext';
import { InfoContext } from 'context/InfoContext';

function ButtonSingleChoiceDesc({ question, selected, updateSelected }) {
  const history = useHistory();
  const {isBackgroundVisible, toggleBackgroundVisible} = useContext(AppContext);
  const { url: path } = useRouteMatch(`${routeCodes.FUNNEL}${routeCodes.QUESTIONS}`)
  const { nextQuestion } = useContext(InfoContext)

  useEffect(() => {
    if (isBackgroundVisible) {
      toggleBackgroundVisible(false);
    }
  }, [isBackgroundVisible, toggleBackgroundVisible])

  const onNext = useCallback(() => {
    nextQuestion(question.CODE)
    history.push(`${path}${question.NEXT_ROUTE}`, { code: question.CODE })
  }, [history, nextQuestion, path, question.CODE, question.NEXT_ROUTE])

  return (
    <Fragment>
      <Header className='text-center'>
        <Header.Logo className={question.LOGO.CLASSNAME}>
          <Image src={question.LOGO.SRC} maxWidth='90px' />
        </Header.Logo>
        <Header.Title className='text-normal w-100'>
          <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
        </Header.Title>
      </Header>
      <Question>
        <Question.Container className='h-75'>
          <Question.Image className={question.IMAGE.CLASSNAME}>
            <Image src={ question.IMAGE.SRC } maxWidth={question.IMAGE.MAX_WIDTH} />
          </Question.Image>
          <Question.Text className='question-description text-center pl-2'>
            { question.DESCRIPTION.map((q) => {
              if (typeof q === 'object') {
                return (
                  <span key={q.content} className={q.className}>
                    {q.content}
                  </span>
                )
              }

              if (typeof q === 'string') {
                return q
              }

              return null
            })}
          </Question.Text>
        </Question.Container>
        <Question.Options className=''>
          { question.OPTIONS.map((q) => {
            return (
              <Button key={ q.value } selected={ selected === q.value } onClick={ () => updateSelected(q.value) } >
                { q.label }
              </Button>
            )
          })}
        </Question.Options>
      </Question>
      <Footer>
        <Button onClick={onNext} disabled={ selected === null }>
          { question.NEXT_CAPTION }
        </Button>
      </Footer>
    </Fragment>
  );
}

export default ButtonSingleChoiceDesc;
