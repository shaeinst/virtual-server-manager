import { Modal } from "@mui/material"
import "./stylesLogout.scss"
import { useState } from "react"
import { Button } from "$exporter/component"

function LogoutModal() {
    const [modalOpen, setModalOpen] = useState(false)

    const handleLogout = () => {
        //handle logout here
    }

    const Logout = () => {
        return (
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <div id="LOGOUT">
                    <h2 className="logout__header">Logout Confirmation</h2>
                    <div className="logout__body">
                        <p className="confirm__title">
                            Are you sure want to logout?
                        </p>
                        <div className="confirm__action">
                            <Button
                                title="Cancle"
                                type="primary"
                                onClick={() => setModalOpen(false)}
                            />
                            <Button
                                title="Logout"
                                type="danger"
                                onClick={handleLogout}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

    return {
        Logout,
        setModalOpen,
    }
}

export default LogoutModal
