const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const PORT = 8001;
require('dotenv').config()

// const CYCLIC_URL= 'https://fine-erin-walkingstick-hem.cyclic.cloud'
// const CYCLIC_DB= 'fine-erin-walkingstick-hemCyclicDB'
// const CYCLIC_BUCKET_NAME= 'cyclic-fine-erin-walkingstick-hem-us-west-1'
// const CYCLIC_APP_ID= 'fine-erin-walkingstick-hem'
// const CYCLIC_URL_UPDATED= 'https://harry-potter-api.cyclic.cloud'

const characters = 
    {
        'harry potter': {
            'name': 'Harry Potter',
            'homeLocation': 'Godric\'s Hollow',
            'birthDate': 'July 31, 1980',
            'patronus': 'Stag',
            'house': 'Gryffindor'
        },
        'hermione granger' : {
            'name': 'Hermione Granger',
            'homeLocation': 'Chipping Norton, Oxfordshire',
            'birthDate': 'September 19, 1979',
            'patronus': 'Otter',
            'house': 'Gryffindor'
        },
        'ron weasley' :
        {
            'name': 'Ronald Weasley',
            'homeLocation': 'The Burrow, Devon',
            'birthdate': 'March 1, 1980',
            'patronus': 'Jack Russell Terrier',
            'house': 'Gryffindor'
        },
        'ginny weasley': {
            'name': 'Ginny Weasley',
            'homeLocation': 'The Burrow, Devon',
            'birthDate': 'August 11, 1981',
            'patronus': 'Horse',
            'house': 'Gryffindor'
        },
        'bill weasley': {
            'name': 'Bill Weasley',
            'homeLocation': 'The Burrow, Devon',
            'birthDate': 'November 29, 1970',
            'patronus': 'Weasel',
            'house': 'Gryffindor'
        },
        'molly weasley': {
            'name': 'Molly Weasley',
            'homeLocation': 'The Burrow, Devon',
            'birthDate': 'October 30, 1949',
            'patronus': 'Non-corporeal',
            'house': 'Gryffindor'
        },
        'arthur weasley': {
            'name': 'Arthur Weasley',
            'homeLocation': 'The Burrow, Devon',
            'birthDate': 'February 6, 1950',
            'patronus': 'Weasel',
            'house': 'Gryffindor'
        },
        'charlie weasley': {
            'name': 'Charlie Weasley',
            'homeLocation': 'The Burrow, Devon',
            'birthDate': 'December 12, 1972',
            'patronus': 'non-corporeal',
            'house': 'Gryffindor'
        },
        'percy weasley': {
            'name': 'unknown',
            'homeLocation': 'unknown',
            'birthDate': 'unknown',
            'patronus': 'unknown',
            'house': 'unknown'
        },
        'fred weasley': {
            'name': 'unknown',
            'homeLocation': 'unknown',
            'birthDate': 'unknown',
            'patronus': 'unknown',
            'house': 'unknown'
        },
        'george weasley': {
            'name': 'unknown',
            'homeLocation': 'unknown',
            'birthDate': 'unknown',
            'patronus': 'unknown',
            'house': 'unknown'
        },
        'unknown': {
            'name': 'unknown',
            'homeLocation': 'unknown',
            'birthDate': 'unknown',
            'patronus': 'unknown',
            'house': 'unknown'
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})