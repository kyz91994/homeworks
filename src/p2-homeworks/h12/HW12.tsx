import React, {useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];
export type ThemesType = 'dark' | 'red' | 'some'
function HW12() {
    const theme = useSelector<AppStoreType,ThemesType>(state=> state.themeSelector.theme); // useSelector
    const dispatch = useDispatch()
    const [value, onChangeOption] = useState<ThemesType>(theme)
    const onChangeCallback =  (option:ThemesType) => {
        dispatch(changeThemeC(option))
        onChangeOption(option)
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <div>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={value}
                onChangeOption={onChangeCallback}
            />

            </div>

            <hr/>
        </div>
    );
}

export default HW12;
