import React from "react"

import { BrowserRouter,Routes,Route } from "react-router-dom"

import { Home } from "./Home"

export const Routings=()=>{
    return (<>

        <BrowserRouter>
        <Routes>
            <Route path="/vetritask" element={<Home/>}> </Route>
        </Routes>
        </BrowserRouter>
        
    </>)
}