import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name:'intake', 
    initialState: {
        user:null,
        mark: null
    }, 
    reducers:{
        updateMarkDesctiption:(state, action)=>{
            state.mark = action.apyload
        },
    }
})

export default slice.reducer