import { RouteHome } from "$exporter"
import { Navbar, Sidebar } from "$exporter/component"
import "./stylesIndex.scss"

function Home() {
    return (
        <div id="HOME">
            <Sidebar />
            <div className="right">
                <Navbar />

                <div className="content">
                    <RouteHome />
                </div>
            </div>
        </div>
    )
}

export default Home
