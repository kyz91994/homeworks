const initState = {
    isLoading: false
}
export type InitStateType = typeof initState
export const loadingReducer = (state:InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.loadingStatus}
        }
        default: return state
    }
}

export const loadingAC = (loadingStatus:boolean) => ({type: 'CHANGE-LOADING', loadingStatus } as const)
type ActionsType = ReturnType<typeof loadingAC>

// fix any