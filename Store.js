const {createStore, compose, applyMiddleware} = require('redux')
const { composeWithDevTools } = require('redux-devtools-extension');
const rootReducer = require('./reducers')
const createSagaMiddleware = require('redux-saga')
console.log(createSagaMiddleware.default)
const {up,down} = require('./reducers/counter')


const logger = ({dispatch, getState}) => (next) => (action) => {
    console.log(action)
    return next(action)
}

const sagaMiddleware = createSagaMiddleware.default()
const middleware = [sagaMiddleware,logger]
const enhancer = process.env.NODE_ENV === 'production'
? compose(applyMiddleware(...middleware)) 
: composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(rootReducer,enhancer)
sagaMiddleware.run(rootSaga)

console.log(store)

// console.log( store.getState() )

// store.dispatch(up())
// store.dispatch(up())
// store.dispatch(up())
// store.dispatch(up())
// store.dispatch(up())
// store.dispatch(up())

// console.log(store.getState())
