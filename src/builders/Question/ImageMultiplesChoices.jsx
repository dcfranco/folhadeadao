import React, { Fragment, useEffect, useContext, useCallback } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import routeCodes from 'constants/routeCodes';
import { useHistory } from 'react-router-dom';
import { AppContext } from 'context/AppContext';

function ImageMultiplesChoices({ question, selected, updateSelected }) {
  const history = useHistory();
  const {isBackgroundVisible, toggleBackgroundVisible} = useContext(AppContext);

  useEffect(() => {
    if (isBackgroundVisible) {
      toggleBackgroundVisible(false);
    }
  }, [isBackgroundVisible, toggleBackgroundVisible])

  const onUpdateSelected = useCallback((value) => () => {
    if (selected.length < question.MAX) {
      const newSelected = selected.includes(value) ? selected.filter((sel) => sel !== value) : selected.concat([value]);
      updateSelected(newSelected)
    } else {
      updateSelected(selected.filter((sel) => sel !== value))
    }
  }, [selected, question.MAX, updateSelected])

  return (
    <Fragment>
      <Header className='text-center'>
        { question.LOGO && (
          <Header.Logo className={question.LOGO.CLASSNAME}>
            <Image src={question.LOGO.SRC} maxWidth='90px' className='m-0' />
          </Header.Logo>
        )}
        <Header.Title className='text-normal w-100'>
          <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
        </Header.Title>
      </Header>
      <Question>
        <Question.Options className='question-options-img'>
          { question.OPTIONS.map((q) => {
            return (
              <Question.Image key={ q.value } className={question.OPTIONS_CLASSNAME} selected={ selected.includes(q.value) } onClick={ onUpdateSelected(q.value) }>
                <Image src={q.image} alt={q.label} />
              </Question.Image>
            )
          })}
        </Question.Options>
      </Question>
      <Footer>
        <Button onClick={ () => history.push(`${routeCodes.QUESTIONS}${question.NEXT_ROUTE}`) } disabled={ selected.length !== question.MAX }>
          { question.NEXT_CAPTION }
        </Button>
      </Footer>
    </Fragment>
  );
}

export default ImageMultiplesChoices;
