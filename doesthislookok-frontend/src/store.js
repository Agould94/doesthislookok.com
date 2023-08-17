import {configureStore} from "@reduxjs/toolkit"
import intakeReducer from "./features/Intake/intakeSlice"

const store = configureStore({
    reducer:{
        intake: intakeReducer
    }
})

export default store