import { RouteHome } from "$exporter"
import { Navbar, Sidebar } from "$exporter/component"
import "./stylesIndex.scss"

function Home() {
    return (
        <div id="HOME">
            <Sidebar />
            <div className="right">
                <Navbar />
                <RouteHome />
            </div>
        </div>
    )
}

export default Home
