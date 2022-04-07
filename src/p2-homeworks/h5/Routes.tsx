import React from 'react'

import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Routes, Route} from 'react-router-dom'
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/juniorplus'
    // add paths
}

function BrowserRoutes() {
    return (
        <div>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default BrowserRoutes