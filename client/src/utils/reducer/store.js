// import { createStore } from 'redux';
// import { sessionService } from 'redux-react-session';
// import createReducer from './reducer';
// import reduced from "./reducer";

// export default function configureStore(history,session){
//     [session,
//     routerMiddleware(history),
//     thunkMiddleware];

//     const enhancers=[applyMiddleware(...middlewares),];

//     const store = createStore(
//         createReducer(),
//         composeEnhancers(...enhancers)
//     );

//     store.injectedReducers={};

//     return store;
// }
// sessionService.initSessionService(store);