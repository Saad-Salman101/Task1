import { createReducer } from "@reduxjs/toolkit";

const initialState={
    sidebarstate:'off',

};
export const customReducer =createReducer(initialState,{

sidebaropen:(state)=>{
    state.sidebarstate = 'on';
},
sidebaroff:(state)=>{
    state.sidebarstate = 'off';
},


})