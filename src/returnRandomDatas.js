var fs = require("fs");


const getRandomDatas =  (object,number) => {
    const keys = Object.keys(object)
    var array = [];
        
    while (true) {
            // Generate random index based on number of keys
            const randIndex = Math.floor(Math.random() * keys.length)
            const randKey = keys[randIndex]
            const name = object[randKey]
            
            if(array.indexOf(name) !== -1){
                console.log("Value exists!")
            } else{
                array.push(name)
            }
            if (array.length == number){
                break
                
            }
            
        }
    return  array

}


function randomFromfile(number,resp) {
    var datas
    fs.readFile('data.json', (err, data) => {
        if (err) throw res.send("empty file");
        let datar = JSON.parse(data);
        datas =  getRandomDatas(datar,number)
        resp.send(datas)
                
    });
    
    
}

function randomWordCount(number,resp){
    dataResp = {}
    wordCount = {}
    fs.readFile('data.json', (err, data) => {
        if (err) throw res.send("empty file");
        let datar = JSON.parse(data);
        
        listDatas = getRandomDatas(datar,number)

        for(let val of listDatas) {
            for (let key of (val.match( /\w+/gm))){
                var keyLowerCase = key.toLowerCase()
                if (wordCount.hasOwnProperty(key)) {
                    wordCount[keyLowerCase] +=1
                }else{
                    wordCount[keyLowerCase]= 1
                }
            }
        }
        dataResp["jokes"] = listDatas
        dataResp["word"] = wordCount
        resp.send(dataResp)   
    });
}

module.exports = {randomFromfile,randomWordCount}