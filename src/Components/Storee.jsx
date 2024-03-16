import {configureStore} from "@reduxjs/toolkit"
import state from "./slice"

    export const cv=configureStore({
        reducer:{data:state}
    })