import React, { Fragment, useCallback, useContext } from 'react';
import classNames from 'classnames';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import routeCodes from 'constants/routeCodes';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { InfoContext } from 'context/InfoContext';

function ButtonSingleChoice({ question, selected, updateSelected, unblock }) {
  const history = useHistory();
  const hasLogo = typeof question.LOGO === 'object';
  const { url: path } = useRouteMatch(`${routeCodes.FUNNEL}${routeCodes.QUESTIONS}`)
  const { nextQuestion } = useContext(InfoContext)

  const onNext = useCallback(() => {
    nextQuestion(question.CODE)
    history.push(`${path}${question.NEXT_ROUTE}`, { code: question.CODE })
  }, [history, nextQuestion, path, question.CODE, question.NEXT_ROUTE])

  return (
    <Fragment>
      <Header className={hasLogo ? 'text-center' : ''}>
        { hasLogo && (
          <Header.Logo className={question.LOGO.CLASSNAME}>
            <Image src={question.LOGO.SRC} maxWidth='90px' />
          </Header.Logo>
        )}
        <Header.Title className={question.CLASSNAME || 'text-normal w-100'}>
          <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
        </Header.Title>
      </Header>
      <Question>
        {typeof question.IMAGE === 'object' ? (
          <Question.Image className={question.IMAGE.CLASSNAME}>
            <Image src={ question.IMAGE.SRC } />
          </Question.Image>
        ) : (
          <Question.Image>
            <Image src={ question.IMAGE } />
          </Question.Image>
        )}
        <Question.Options className={classNames(question.OPTIONS_CLASSNAME)}>
          { question.OPTIONS.map((q) => {
            return (
              <Button className={question.OPTION_CLASSNAME} key={ q.value } selected={ selected === q.value } onClick={ () => updateSelected(q.value) } >
                { q.label }
              </Button>
            )
          })}
        </Question.Options>
        <Question.Form className={ question.CLASSNAME_FORM }>
          {( question.FORM )}
        </Question.Form>
      </Question>
      <Footer>
        <Button onClick={onNext} disabled={ !selected && !unblock }>
          { question.NEXT_CAPTION }
        </Button>
      </Footer>
    </Fragment>
  );
}

export default ButtonSingleChoice;
