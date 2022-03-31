import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const SearchSlide=createSlice({
    name:'search',
    initialState:{
        search:'',
    },
    reducers:{
        handleSearch :(state,action)=>{
            state.search= action.payload
        }
    }
})

export const {handleSearch}= SearchSlide.actions;

export default SearchSlide.reducer;