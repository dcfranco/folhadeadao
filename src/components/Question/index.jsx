import React from 'react';
import classNames from 'classnames';
import Image from './Image';
import Text from './Text';
import Video from './Video';
import Options from './Options';
import Container from './Container'

function Question({ children, className }) {
  return (
    <section className={classNames('question', className)}>
      { children }
    </section>
  );
}

Question.Image = Image;
Question.Text = Text;
Question.Video = Video;
Question.Options = Options;
Question.Container = Container;

export {Image, Text, Video, Options};
export default Question;
