import { Modal } from "@mui/material"
import "./stylesLogout.scss"
import { useState } from "react"

function LogoutModal() {
    const [modalOpen, setModalOpen] = useState(false)

    const Logout = () => {
        return (
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <div id="LOGOUT">Logout Modal</div>
            </Modal>
        )
    }

    return {
        Logout,
        setModalOpen,
    }
}

export default LogoutModal
