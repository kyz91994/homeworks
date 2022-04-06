import {UserType} from "../HW8";
type ActionType = { type: 'sort',payload: 'up' | 'down' } | {type: 'check', payload: number}

export const sortAC = (payload:'up' | 'down'):ActionType => {
    return{type: 'sort', payload}
}

export const checkAgeAC = (payload:number):ActionType => {
    return{type: 'check', payload}
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state];
                (action.payload ==='up') &&  newState.sort((a,b)=>a.name>b.name? -1: 1);
                (action.payload==='down') && newState.sort((a,b)=>a.name>b.name? 1: -1);
            return newState

        }
        case 'check': {
            return state.filter(u=>u.age>=action.payload)
        }
        default: return state
    }
}