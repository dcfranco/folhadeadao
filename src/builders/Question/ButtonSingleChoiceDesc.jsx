import React, { Fragment, useState, useEffect, useContext } from 'react';
import Header from 'components/Header';
import Question from 'components/Question';
import Image from 'components/Image';
import Button from 'components/Button';
import Footer from 'components/Footer';
import routeCodes from 'constants/routeCodes';
import { useHistory } from 'react-router-dom';
import { AppContext } from 'context/AppContext';

function ButtonSingleChoiceDesc({ question }) {
  const [selected, updateSelected] = useState(null);
  const history = useHistory();
  const {isBackgroundVisible, toggleBackgroundVisible} = useContext(AppContext);

  useEffect(() => {
    if (isBackgroundVisible) {
      toggleBackgroundVisible(false);
    }
  }, [isBackgroundVisible, toggleBackgroundVisible])

  return (
    <Fragment>
      <Header className='text-center mt-0'>
        <Header.Logo className={question.LOGO.CLASSNAME}>
          <Image src={question.LOGO.SRC} maxWidth='90px' />
        </Header.Logo>
        <Header.Title className='text-normal w-100 mt-3 mb-0'>
          <div dangerouslySetInnerHTML={ {  __html: question.TITLE } } />
        </Header.Title>
      </Header>
      <Question>
        <Question.Container className=''>
          <Question.Image className={question.IMAGE.CLASSNAME}>
            <Image src={ question.IMAGE.SRC } />
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

export default ButtonSingleChoiceDesc;
