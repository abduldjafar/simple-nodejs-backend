const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const {getDatas,getDatasRest} = require("./getRandomData")
const {randomFromfile,randomWordCount} = require("./returnRandomDatas")
const {deleteEntries} = require("./deleteData")
const app = express();

app.use(bodyParser.json());

app.get('/random10', function (req, res) {
    getDatasRest(10,res)
})

app.get('/random5', function (req, res) {
    randomFromfile(5,res)

    
 })

 app.get('/randomCount', function (req, res) {
    randomWordCount(10,res)
    
 })
 app.delete('/datas', function (req, res) {
    deleteEntries(res)
    
 })

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(getDatas(10));
   console.log("Example app listening at http://%s:%s", host, port)
})