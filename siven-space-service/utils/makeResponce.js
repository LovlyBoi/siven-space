function makeResponce(code = 200, data = '', msg = '') {
  return JSON.stringify({
    code,
    data,
    msg,
  })
}

module.exports = makeResponce
