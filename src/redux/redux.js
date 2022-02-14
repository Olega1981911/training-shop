const redux = require('redux')

const initialState = {
    counter: 0
}

//reducer
const reducer = (state = initialState, action) => {
    return state
}

//store
const store = redux.createStore(reducer)

store.subscribe(() => {

})

//actions
const addCounter = {
    type: 'ADD_NUMBER'
}

store.dispatch(addCounter)