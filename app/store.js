//configure store package
const configureStore =  require("@reduxjs/toolkit").configureStore;

//importing reducer from cakeSlice.js
const cakeReducer = require("../features/cake/cakeSlice");

const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
})

module.exports = store;