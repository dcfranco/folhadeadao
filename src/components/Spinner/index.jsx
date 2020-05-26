import React, { useEffect } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

function Spinner() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className='app-loading'>
      <div className='app-loading-overlay ' />
      <LinearProgress className='app-loading-line' />
    </div>
  )
}

export default Spinner