//import create slice from redux toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

//import cake Actions for extra reducer i.e buy one cake get one ice cream free
const cakeActions = require("../cake/cakeSlice").cakeActions;

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
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcecreams--;
        });
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;