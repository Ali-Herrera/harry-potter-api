const express = require('express');
const app = express();
const PORT = 8001;

const CYCLIC_URL= 'https://fine-erin-walkingstick-hem.cyclic.cloud'
const CYCLIC_DB= 'fine-erin-walkingstick-hemCyclicDB'
const CYCLIC_BUCKET_NAME= 'cyclic-fine-erin-walkingstick-hem-us-west-1'
const CYCLIC_APP_ID= 'fine-erin-walkingstick-hem'
const CYCLIC_URL_UPDATED= 'https://harry-potter-api.cyclic.cloud'

const characters = 
    {
        'harry potter': {
            'name': 'Harry Potter',
            'birthLocation': 'Godric\'s Hollow',
            'birthDate': 'July 31, 1980'
        },
        'hermione granger' : {
            'name': 'Hermione Granger',
            'birthLocation': 'Chipping Norton, Oxfordshire',
            'birthDate': 'September 19, 1979',
        },
        'unknown': {
            'name': 'unknown',
            'birthLocation': 'unknown',
            'birthDate': 'unknown'
        }
    }

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase();
    if(characters[characterName]){
       response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(CYCLIC_URL || CYCLIC_URL_UPDATED || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})