//import create slice from redux toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

//initial state
const initialState = {
    numOfIcecreams: 20
}

//ice cream slice method takes a name, state and reducer(s) and returns one root reducer and actions
const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        }
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;