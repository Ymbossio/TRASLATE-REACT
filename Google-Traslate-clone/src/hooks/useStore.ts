import { AUTO_LANGUAJE } from '../constants';
import { Action, FromLanguaje, Languaje, type State } from '../types';
import { useReducer } from 'react';


const initialState: State = {
    fromLanguaje: 'auto',
    toLanguaje: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  function reducer (state: State, action: Action){
  
    const {type } = action
  
    //acción de intercambio de idioma
    if(type === 'INTERCHANGE_LANGUAJES'){
      if(state.fromLanguaje=== AUTO_LANGUAJE) return state

      return {...state, 
      fromLanguaje: state.toLanguaje,
      toLanguaje: state.fromLanguaje
      }
    } 
  
    //
    if(type === 'SET_FROM_LANGUAJES'){
      return {
        ...state, 
        fromLanguaje: action.payload
      }
    }
  
      if(type === 'SET_TO_LANGUAJE'){
        return {
          ...state, 
          fromLanguaje: action.payload
        }
      }
  
        if(type === 'SET_FROM_TEXT'){
          return {
            ...state,
            loading: true, 
            fromLanguaje: action.payload,
            result: ''
          }
        }
  
        if(type === 'SET_RESULT'){
          return {
            ...state,
            loading: false, 
            fromLanguaje: action.payload
          } 
        }
        return state
  }
  

  export function useStore (){
    const [{
        fromLanguaje,
        toLanguaje,
        fromText,
        result,
        loading
      }, dispatch] = useReducer(reducer, initialState)
    
      const interchangeLanguaje = () => dispatch({type: 'INTERCHANGE_LANGUAJES'})
      
      const setFromLanguaje = (payload:FromLanguaje) => {
        dispatch({type: 'SET_FROM_LANGUAJES', payload})
      }

      const setToLanguaje =( payload: Languaje) =>{
        dispatch({ type: 'SET_TO_LANGUAJE', payload})
      }

      const setFromText = (payload: Languaje )=>{
        dispatch({ type: 'SET_FROM_TEXT', payload})
      }

      
      const setResult = (payload: Languaje) =>{
        dispatch({ type: 'SET_RESULT', payload})
      }


      return {
        fromLanguaje,
        toLanguaje,
        fromText,
        result,
        loading,
        interchangeLanguaje,
        setFromLanguaje,
        setToLanguaje,
        setFromText,
        setResult
      }
  }