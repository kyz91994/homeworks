import React from 'react'
import Header from './Header'
import BrowserRoutes from "./Routes";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

            <Header/>
            <BrowserRoutes/>

        </div>
    )
}

export default HW5
