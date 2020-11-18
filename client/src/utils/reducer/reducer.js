// import React,{createContext, useReducer, useContext} from 'react';
// import {SET_USER} from "./action";
// import { combineReducers } from 'redux';
// import { sessionReducer } from 'redux-react-session';
// // 
// const StoreContext=createContext();
// const {Provider}=StoreContext;
// const isEmpty=require("is-empty");

// const userReducers = (state, action) => {
//     switch(action.type){
//         case SET_USER:
//             return{
//                 ...state,
//                 iisAuthenticated:!isEmpty(action.payload),
//                 id:action.payload
//             };
//         default:
//             return state;
        
//     }
// };

// export default userReducers;

// export default function createReducer(injectedReducers){
//     return combineReducers({
//         session:sessionReducer,
//         user:userReducers,
//         ...injectedReducers,
//     });
// }

// const StoreProvider=({value=[],...props})=>{
//     const[state, dispatch]=useReducer(reducer,{
//         isAuthenticated:false,
//         id:{}
//     });

//     return <Provider value={[state,dispatch]} {...props} />
// };

// const useStoreContext=()=>{
//     return useContext(StoreContext);
// };
// //const reducer = combineReducers(reducers);

// export{StoreProvider, useStoreContext};