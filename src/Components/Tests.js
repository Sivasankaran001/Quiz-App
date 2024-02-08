import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtasktolist, pageupgrade, setdisable } from "../slices/taskslice";
import Result from "./Result";
import PlayerName from "./PlayerName";

const Tests=(props)=>{
    const {questions}=(props);
    const [qnum,setqnum]=useState(0)
        let list=questions[qnum].options;
        const [answer,setanswer]=useState(0)
        const [selectedOption, setSelectedOption] = useState(null);
        const [point,setpoint]=useState(0)
        const {name}=useSelector((state)=>state.tasks)
        const [modal,setmodal]=useState(true)
        const {page}=useSelector((state)=>state.tasks)
        const dispatch=useDispatch(addtasktolist)
        const dispatchpage=useDispatch(pageupgrade)
        const dispatchselect=useDispatch(setdisable)
        const {selectedtask}=useSelector((state)=>state.tasks)
          
        const Change = (event) => {
          setSelectedOption(event.target.value);
          setanswer(event.target.id);
          dispatchselect(setdisable(true))
        };

        const increment=()=>{
          console.log(answer);
          console.log(questions[qnum].correctOption);
          console.log(answer===questions[qnum].correctOption);
          if(parseInt(answer)===parseInt(questions[qnum].correctOption)){
            setpoint((point) => point+10);
          }
          else{
            setpoint(point)
          }
        if(selectedtask){
            setqnum(qnum+1);
            dispatchselect(setdisable(false))
        }
        
    }
    
        const option=list.map((option,index)=>{
            return(
            <div className="pt-3 ps-5" >
            <input className="input color-dark" type="radio" name="options" onChange={Change} checked={selectedOption===option} value={option} key={index} id={index} />
            <label className="ps-2" htmlFor={index}>{option}</label>
            </div>
            )
        })
        console.log()
        const addpoints=()=>{
            if(selectedtask){

                dispatch(addtasktolist({name,point}))
                dispatchpage(pageupgrade(3))
                setqnum(0)
                setpoint(0)
            }
        }

        let button;
        if ((qnum<(questions.length)-1)&&(qnum>=0)){
            button=<div style={{width:"calc(80% - 30px)"}} className="position-absolute bottom-0 pb-5 ">
            <div  className=" d-flex ps-5 justify-content-end">
            <button  className="button me-5 bg-dark text-light"  onClick={increment}>Next</button>
            </div>
            </div>
     
        }else{
            button=<div style={{width:"calc(80% - 30px)"}} className="position-absolute bottom-0 pb-5 ">
            <div  className="d-flex ps-5 justify-content-end">
            <button className=" button me-5 bg-dark text-light" onClick={addpoints}>Finish</button></div>
            </div>
        }
    
    return(
      <>{page===2 &&
        <div className="test">
            <h3 className="ps-4">{questions[qnum].question}</h3>
            {option}
            <h5 className="pt-4 pe-5 position-absolute top-0 end-0">Question {qnum+1}/{questions.length} </h5>
            {button}
        </div>}
        {page===3 && <Result/>}
        <PlayerName show={modal}  onhide={()=>{setmodal(false)}}/>
        </>
    )
}
export default Tests;