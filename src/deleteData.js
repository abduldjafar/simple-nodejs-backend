const fs = require('fs')

function deleteEntries(res){
    fs.truncate('data.json', 0, function(){res.send('done')})
    fs.writeFile('./data.json', JSON.stringify({}), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
})

}

module.exports = {deleteEntries}
