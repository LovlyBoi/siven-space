const multer = require('multer')
const { resolve, extname } = require('path')

let fullPath = resolve(__dirname, '../md2html/md')
//设置文件的名称
// let filename = ''
const storage = multer.diskStorage({
  //设置存储路径
  destination: (req, file, cb) => {
    cb(null, fullPath)
  },
  //设置存储的文件名
  filename: (req, file, cb) => {
    // let fileExtname = extname(file.originalname)
    // const splitedFilename = file.originalname.split('.')
    // const filenameWithoutExtend = splitedFilename
    //   .slice(0, splitedFilename.length - 1)
    //   .join('')
    // filename = `${filenameWithoutExtend}-${Date.now()}${fileExtname}`
    // cb(null, filename)
    cb(null, file.originalname)
  },
})

module.exports = {
  storage,
}
