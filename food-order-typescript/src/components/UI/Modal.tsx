import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = () => {
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = (props: { children: any }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalTarget: any = document.getElementById('overlays')

const Modal = (props: { children: any }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop></Backdrop>, portalTarget)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalTarget
            )}
        </>
    )
}

export default Modal
