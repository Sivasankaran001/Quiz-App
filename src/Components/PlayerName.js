import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal,Form } from "react-bootstrap";
import { namechange, showmodal } from "../slices/taskslice";

const PlayerName=(props)=>{
    const [vlue,setvlue]=useState("");
    const dispatchname=useDispatch(namechange);
    const dispatchshow=useDispatch(showmodal);
    const {show}=useSelector((state)=>state.tasks)
    const close=(e)=>{
        e.preventDefault();
        if (vlue!==""){
            dispatchshow(showmodal(false))
            dispatchname(namechange(vlue))
            setvlue("")
        }
    }
    return(
        <>
            <Modal fade show={show} centered >
                <Modal.Body className="pb-3 pt-5 ps-5 pe-5 contained-modal-title-vcenter">
                    <Form autoComplete="off">                   
                    <Form.Group className="fw-bold mb-3" controlId="getName">
                    <Form.Label >Player Name</Form.Label>
                    <Form.Control value={vlue} required onChange={(e)=>setvlue(e.target.value)} placeholder="Enter Here" type="text"/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                    <button className="button " type="submit" onClick={close}>Confirm</button>
                    </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default PlayerName;