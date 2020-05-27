import React from 'react';
import classNames from 'classnames';
import Youtube from 'react-youtube';

function Video({ children, className, videoId, onPlay }) {
  return (
    <div className={classNames('question-video', className)}>
      <Youtube
        videoId={videoId}
        opts={{
          height: '100%',
          width: '100%',
          playerVars: {
            showinfo: 1,
            modestbranding: 1,
            color: 'white',
            controls: 0
          }}}
          onPlay={onPlay} />
    </div>
  );
}

export default Video;
