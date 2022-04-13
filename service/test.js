const { connect, find, CardModel } = require('./db')

connect().then(() => {
  CardModel.findById('622754f294ebdb524856ae74').then((res) => {
    console.log(res)
  })
})
