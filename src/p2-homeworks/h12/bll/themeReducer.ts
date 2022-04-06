import {ThemesType} from "../HW12";

const initState:InitStateType = {
    theme: 'dark'
};
type ActionsType = ReturnType<typeof changeThemeC>
type InitStateType = {
    theme: ThemesType
}

export const themeReducer = (state = initState, action: ActionsType ): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {

            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:ThemesType) => ({type: "CHANGE-THEME", theme} as const); // fix any