
module.exports = function(app){

  // app.get('/boardPage', (req, res) => {
  //   console.log('get request to /BoardPage')
  // })
  app.post('/', (req, res) => {
    console.log('post request to /')
  })
}