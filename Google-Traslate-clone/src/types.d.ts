import { AUTO_LANGUAJE, SUPPORTED_LANGUAJES } from "./constants"

export type Languaje = keyof typeof SUPPORTED_LANGUAJES
export type AutoLanguaje = typeof AUTO_LANGUAJE
export type FromLanguaje = Languaje | AutoLanguaje

export interface State {
    fromLanguaje: string
    toLanguaje: string
    fromText: string
    result: string
    loading: boolean
}

export type Action = 
    | { type: 'SET_FROM_LANGUAJES', payload: string}
    | { type: 'INTERCHANGE_LANGUAJES'}
    | { type: 'SET_TO_LANGUAJE', payload: string}
    | { type: 'SET_FROM_TEXT', payload: string}
    | { type: 'SET_RESULT', payload:string}
  