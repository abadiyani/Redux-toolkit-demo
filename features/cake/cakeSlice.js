//importing create slice from redux toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

//initial state
const initialState = {
    numOfCakes: 10
}

//create slice takes name, state and reducers. It returns main reducer and actions.
const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;