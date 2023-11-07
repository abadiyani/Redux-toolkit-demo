//import store from store.js
const store = require("./app/store");

//import actions from cakeSlice.js
const cakeActions = require("./features/cake/cakeSlice").cakeActions; 

//log initial state
console.log("Initial State: ", store.getState());

//subscibe to the store
const unsubscribe = store.subscribe(()=>{
    console.log("Updated state: ", store.getState());
});

//dispatch actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

//unsubscribe
unsubscribe();