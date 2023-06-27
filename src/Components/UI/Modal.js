import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom';


const Backdrop=(props)=>{
    return <div className={classes.backdrop}/>
};

const Modaloverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
             {props.children}
            </div>
        </div>
    )

}
const element=document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
    {ReactDOM.createPortal(<Backdrop/>,element)}
    {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,element)}
    </Fragment>
  )
}

export default Modal
