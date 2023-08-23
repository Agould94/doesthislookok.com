import {createSlice} from "@reduxjs/toolkit"
const slice = createSlice({
    name:'user',
    initialState:{
        user: null, 
        other: null, 
    },
    reducers:{
        login: (state, action)=>{
            state.user = action.payload
        },
        logout: (state)=>{
            state.user = null
        },
        setUser: (state, action)=>{
            state.user = action.payload
        }
    }
})

const {login, logout, setUser} = slice.actions

export{login, logout, setUser}
export default slice.reducer