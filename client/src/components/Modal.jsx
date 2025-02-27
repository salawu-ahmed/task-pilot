import React, { useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({ ref, children, buttonCaption }) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })
    return (
        createPortal(
            <dialog ref={dialog}>
                {children}
                <form method='dialog'>
                    <button>{buttonCaption}</button>
                </form>
            </dialog>,
            document.getElementById('modal')
        )
    )
}

export default Modal
