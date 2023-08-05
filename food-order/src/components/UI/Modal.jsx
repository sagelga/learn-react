import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalLocation = document.getElementById('overlays')
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart} />,
                portalLocation
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalLocation
            )}
        </>
    )
}

export default Modal
