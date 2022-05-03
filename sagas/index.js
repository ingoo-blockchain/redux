const { all } = require('redux-saga/effects')

function* watchLogin() {
    yield task('LOG_IN')
}

function* rootSaga(){
    yield all([
        
    ])
}

/*
  actionChannel: [Getter],
  all: [Getter],
  apply: [Getter],
  call: [Getter],
  cancel: [Getter],
  cancelled: [Getter],
  cps: [Getter],
  delay: [Getter],
  effectTypes: [Getter],
  flush: [Getter],
  fork: [Getter],
  putResolve: [Getter],
  spawn: [Getter],
  retry: [Getter],
  takeEvery: [Getter],
  takeLatest: [Getter],
  takeLeading: [Getter],
  throttle: [Getter]
*/