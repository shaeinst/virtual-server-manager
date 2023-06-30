import "./stylesServerDisplay.scss"
import Actions from "./Action"
import Table from "./Table"

function ServerDisplay() {
    //

    const { Display, selectedServers } = Table()

    return (
        <div className="SERVERDISPLAY">
            <Actions selectedServers={selectedServers} />
            <Display />
        </div>
    )
}

export default ServerDisplay
