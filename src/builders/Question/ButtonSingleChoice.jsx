import React, { Fragment, useState, useContext, useEffect } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import routeCodes from 'constants/routeCodes';
import { useHistory } from 'react-router-dom';
import { AppContext } from 'context/AppContext';

function ButtonSingleChoice({ question, hideBackground }) {
  const [selected, updateSelected] = useState(null);
  const history = useHistory();

  const {toggleBackgroundVisible} = useContext(AppContext);
  
  useEffect(() => {
    if (hideBackground) {
      toggleBackgroundVisible(false);
    }
  }, [])

  return (
    <Fragment>
      {typeof question.LOGO === 'object' ? (
        <Header className='text-center mt-0'>
          <Header.Logo className={question.LOGO.CLASSNAME}>
            <Image src={question.LOGO.SRC} maxWidth='90px' />
          </Header.Logo>
          <Header.Title className='text-normal w-100 mt-3 mb-0'>
            <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
          </Header.Title>
        </Header>
      ) : (
        <Header>
          <Header.Title className={question.CLASSNAME}>
            <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
          </Header.Title>
        </Header>
      )}
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
        <Question.Options className='mt-auto'>
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
        <Button onClick={ () => history.push(`${routeCodes.QUESTIONS}${question.NEXT_ROUTE}`) } disabled={ selected === null }>
          { question.NEXT_CAPTION }
        </Button>
      </Footer>
    </Fragment>
  );
}

export default ButtonSingleChoice;
