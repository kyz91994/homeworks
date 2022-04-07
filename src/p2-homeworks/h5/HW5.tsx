import React from 'react'
import Header from './Header'
import HashRoutes from "./Routes";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

            <Header/>
            <HashRoutes/>

        </div>
    )
}

export default HW5
