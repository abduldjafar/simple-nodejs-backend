const axios = require('axios')
var fs = require("fs");
var parsedJSON = require('../data.json');



const getRandom =  () => {
  try {
    return axios.get('http://api.icndb.com/jokes/random/')
  } catch (error) {
    console.error(error)
  }
}

function getDatas(number)  {
  for (i = 0; i < number; i++) {
    getRandom().then(response => {
        if (response.data.value) {
            var id = JSON.stringify(response.data.value.id)
            var value = JSON.stringify(response.data.value.joke)
            parsedJSON[id]=value
            if (i = 9){
                fs.writeFile('./data.json', JSON.stringify(parsedJSON), err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        console.log('Successfully wrote file')
                    }
                })
            }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

function getDatasRest(number,resp){
  try{
    getDatas(number)
    resp.send("success")
  }catch(error){
    resp.send("error when process")
  }
}
module.exports = {getDatas,getDatasRest}
