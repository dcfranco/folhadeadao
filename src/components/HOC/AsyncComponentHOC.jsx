import React from 'react'
import Loadable from 'react-loadable'
import Spinner from 'components/Spinner'

function AsyncComponentHOC(loader) {
  return Loadable({
    loader,
    loading: () => <Spinner />,
  })
}

export default AsyncComponentHOC