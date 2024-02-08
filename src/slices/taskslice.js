import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasklist:[],
    page:2,
    name:'',
    show:true,
    selectedtask:false
}
const taskslice=createSlice({
    name:"taskslice",
    initialState,
    reducers:{
        addtasktolist:(state,action)=>{
            const id=Math.random()*100
            const task={...action.payload,id}
            state.tasklist.push(task)
        },
        pageupgrade:(state,action)=>{
            state.page=action.payload;
        },
        namechange:(state,action)=>{
            state.name=action.payload;
        },
        showmodal:(state,action)=>{
            state.show=action.payload;
        },
        setdisable:(state,action)=>{
            state.selectedtask=action.payload;
        }
    }
})
export const{addtasktolist,pageupgrade,namechange,showmodal,setdisable}=taskslice.actions

export default taskslice.reducer;