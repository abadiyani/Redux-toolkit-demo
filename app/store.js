//configure store package
const configureStore =  require("@reduxjs/toolkit").configureStore;

//Redux logger middleware package
// const reduxLogger = require("redux-logger");

//importing reducer from cakeSlice.js and icecreamSlice.js
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

//create logger
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
})

module.exports = store;