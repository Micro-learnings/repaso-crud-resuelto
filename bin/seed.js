const mongoose = require('mongoose')
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')

const dbtitle = 'repaso-crud'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

Coaster.collection.drop()
Park.collection.drop()

const coasters = [
    {
        name: "Shambala, aventura en el Himalaya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 1728,
        inversions: 0,
        active: true,
        park: {
            name: 'Port Aventura Park',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Superman, atracción de acero",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 1120,
        inversions: 5,
        active: true,
        park: {
            name: 'Parque Warner Madrid',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Tarántula",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 1090,
        inversions: 0,
        active: true,
        park: {
            name: 'Parque de Atracciones de Madrid',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Oblivion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 671,
        inversions: 0,
        active: true,
        park: {
            name: 'Alton Towers UK',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Twisted Colossus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 2910,
        inversions: 0,
        active: true,
        park: {
            name: 'Six Flags Magic Mountain',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "King Dha",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 671,
        inversions: 0,
        active: true,
        park: {
            name: 'Six Flags Great America',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Force One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 1671,
        inversions: 4,
        active: true,
        park: {
            name: 'Ferrari Land Dubai',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Anaconda Returns",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 1098,
        inversions: 0,
        active: true,
        park: {
            name: 'Six Flags Over Georgia',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    },
    {
        name: "Justice League Adventure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        length: 1527,
        inversions: 10,
        active: true,
        park: {
            name: 'Magic Land Russia',
            description: 'Lorem Ipsum Dolor Sit Amet',
            active: true
        }
    }
]

Promise.all(coasters.map(coaster => Park.create(coaster.park).then(park => park.name)))
    .then(() => coasters.map(coaster => Park.findOne({ name: coaster.park.name }).then(park => Object.assign({}, coaster, { park: park._id }))))
    .then(findParks => Promise.all(findParks).then(coasters => coasters.map(coaster => Coaster.create(coaster))))
    .then(savedCoasters => Promise.all(savedCoasters).then(coasters => coasters.forEach(coaster => console.log(`Montaña rusa ${coaster.name} creada`))).then(() => mongoose.connection.close()))
    .catch(error => console.log('Error: ', error))