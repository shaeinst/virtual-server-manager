import Table from "./Table"
import "./stylesServerDisplay.scss"

function ServerDisplay() {
    //

    const { Display } = Table()

    return (
        <div className="SERVERDISPLAY">
            <div className="actions">actions are here</div>
            <Display />
        </div>
    )
}

export default ServerDisplay
