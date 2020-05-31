function bindPathParams(pathParams, path) {
  if (!pathParams) {
    return path
  }
  return Object.keys(pathParams).reduce((result, key) => {
    return result.replace(`:${ key }`, pathParams[key])
  }, path)
}

export default bindPathParams
