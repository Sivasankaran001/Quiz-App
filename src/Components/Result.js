import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageupgrade,showmodal } from "../slices/taskslice";

const Result=()=>{
    const {tasklist}=useSelector((state)=>state.tasks)
    const dispatch=useDispatch(pageupgrade)
    const dispatchshow=useDispatch(showmodal)
    const select=tasklist[tasklist.length-1]
    const pagechange=()=>{
        dispatch(pageupgrade(2));
        dispatchshow(showmodal(true));
    }
    return(
        <div className=" Result d-flex flex-column justify-content-center align-items-center ">
        <h1 >Hi {select.name} your score is {select.point}</h1>
        <button className="button" onClick={pagechange}>Retest</button>
        </div>
    )
}
export default Result;