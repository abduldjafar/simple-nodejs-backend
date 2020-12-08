# simple-nodejs-backend

## How to use it
1. clone the repos
2. change directory to repo folder
3. npm install
4. node src/index.js
5. The service will listen in port 8080
6. when the service start. it will get 10 datas randomly

## Endpoints
1. http://localhost:8080/random5  => for get 5 random jokes
2. http://localhost:8080/randomCount => for get 10 random jokes with wordcount
3. http://localhost:8080/random10 => for get 10 datas an save into storage
4. http://localhost:8080/datas => for delete all datas in storage

## storage
storage that used for this case is json file (data.json)
