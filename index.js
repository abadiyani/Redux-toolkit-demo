//import store from store.js
const store = require("./app/store");

//import actions from cakeSlice.js and icecreamSlice.js
const cakeActions = require("./features/cake/cakeSlice").cakeActions; 
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;

//log initial state
console.log("Initial State: ", store.getState());

//subscibe to the store
const unsubscribe = store.subscribe(()=>{});

//dispatch cake actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

//dispatch icecream Actions
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

//unsubscribe
unsubscribe();