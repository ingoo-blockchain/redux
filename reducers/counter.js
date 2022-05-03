const {createAction, handleActions} = require('redux-actions')

const initialState = {
    number:0
}

const UP = 'COUNTER/UP'
const DOWN = 'COUNTER/DOWN'

const up = createAction(UP, payload => payload)
const down = createAction(DOWN, payload => payload)

const counter = handleActions({
        [UP]: (state,action) => ({ number:state.number + 1 }),
        [DOWN]: (state,action) => ({ number:state.number - 1 })
    },
    initialState
)

module.exports = {
    counter,
    up,
    down
}
