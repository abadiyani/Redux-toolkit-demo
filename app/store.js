//configure store package
const configureStore =  require("@reduxjs/toolkit").configureStore;

//importing reducer from cakeSlice.js and icecreamSlice.js
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    }
})

module.exports = store;