import React from "react";
import { useSelector } from "react-redux";


const Scorehistory=()=>{
    const {tasklist}=useSelector((state)=>state.tasks)
    let display;
    console.log(tasklist);
    if (tasklist.length>0){

        display=tasklist.map((data,index) => {
            return(
            <div className="d-flex">
                <h3>{index+1}</h3>
                <h3>{data.name}</h3>
                <h3>{data.point}</h3>
            </div>)
        })
    }else{
        display=
        <h2 className="d-flex  text-center">There is no records found!</h2>
    }
    return(
        <div className="d-flex-column">
        {display}
        </div>
    )
}
export default Scorehistory;