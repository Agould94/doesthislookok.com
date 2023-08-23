import {configureStore} from "@reduxjs/toolkit"
import intakeReducer from "./features/Intake/intakeSlice"
import userReducer from "./features/User/userSlice"

const store = configureStore({
    reducer:{
        intake: intakeReducer,
        user: userReducer
    }
})

export default store