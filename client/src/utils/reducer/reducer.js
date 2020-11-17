import React,{createContext, useReducer, useContext} from 'react';
import {REMOVE_INV, UPDATE_INV,ADD_INV} from "./action";
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
// 
const StoreContext=createContext();
const {Provider}=StoreContext;

const userReducers = (state, action) => {
    switch(action.type){
        case ADD_INV:
            return{
                ...state,
                id:action._id,
                inventory:{id, ...state.inventory},
                removeInv:false
            };
        default:
            return state;
        
    }
};

export default userReducers;

export default function createReducer(injectedReducers){
    return combineReducers({
        session:sessionReducer,
        user:userReducers,
        ...injectedReducers,
    });
}

const StoreProvider=({value=[],...props})=>{
    const[state, dispatch]=useReducer(reducer,{
        inventory:[],
        _id:0,
        title:"",
        inventory:{
            name:"",
            quantity:0,
            dateCreated:""
        },
        removeInv:false
    });

    return <Provider value={[state,dispatch]} {...props} />
};

const useStoreContext=()=>{
    return useContext(StoreContext);
};
//const reducer = combineReducers(reducers);

export{StoreProvider, useStoreContext};