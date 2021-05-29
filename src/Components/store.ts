import { AnyAction, configureStore } from '@reduxjs/toolkit'



import Genoma from '../interfaces/Genoma'
import userAction from '../interfaces/userAction'
import userState from '../interfaces/userState'


const SET_USER   = 'SET-USERNAME';
const SET_GENOMA = 'SET-GENOMA';

const ADD_LENGUAJE = 'ADD-LENGUAJE';
const REMOVE_LENGUAJE = 'REMOVE-LENGUAJE';
const SET_LENGUAJES = "SET-LENGUAJES";


const userstate: userState = {
  stack: []
};

function userReducer(state = userstate, action: any){  
  switch(action.type){
    case SET_USER:
      return { ...state, userid: action.payload}      
    case SET_GENOMA:
      return { ...state, genoma: action.payload}
    case ADD_LENGUAJE:
      return { ...state, stack: state.stack.concat(action.payload)}
    case REMOVE_LENGUAJE:
      let pos = state.stack.findIndex((e) => e == action.payload);
      return {
        ...state,
        stack: [
          ...state.stack.slice(0, pos),
          ...state.stack.slice(pos + 1)
        ],        
      }
    case SET_LENGUAJES:
      if(typeof(action.payload) == 'object'){
        return { ...state, stack: action.payload}
      }
      return { ...state}
    default:
      return(state);
  }
}

export function setUser(user:string) : any {
  return { type: SET_USER, payload: user};
}

export function setGenoma(genoma:any) : any {
  return { type: SET_GENOMA, payload: genoma};
}

export function addStackLenguaje(lenguaje:string) : any {
  console.log("PUTOOOO: ", lenguaje)
  return { type: ADD_LENGUAJE, payload: lenguaje};
}

export function removeStackLenguaje(lenguaje:string) : any {
  return { type: REMOVE_LENGUAJE, payload: lenguaje};
}

export function setStack(lenguajes:Array<string>) : any {
  return { type: SET_LENGUAJES, payload: lenguajes};
}

const store = configureStore({
  reducer: {
    userReducer
  }
})


store.subscribe(() => {console.log(store.getState())})
// store.dispatch({ type: 'counter/incremented' })
// store.dispatch({ type: 'counter/incremented' })
// store.dispatch({ type: 'counter/set', payload: 10 })

export default store;