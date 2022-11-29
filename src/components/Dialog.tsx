import ReactModal from "react-modal"

function Dialog ({open, setOpen, children}: {open: any, setOpen: any, children: any}) {

    const dialogStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '-20%',
            bottom: '-40%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '19px'
        },
    };

    return (
        <ReactModal
            isOpen={open}
            onRequestClose={() => {setOpen(false)}}
            style={dialogStyles}
            contentLabel="">
            {children}
        </ReactModal>
    )
}

export default Dialog;
