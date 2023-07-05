import { statBoxItems } from "./statBoxItem"
import "./stylesServerStat.scss"

type StatBoxType = {
    title: string
    count: string
    style: {
        color: string
        background: string
    }
    icon: React.ReactNode
}

const StatBox = ({ title, count, style, icon }: StatBoxType) => {
    return (
        <div className="STATBOX" style={style}>
            <div className="label">
                {icon}
                {title}
            </div>
            <div className="count">{count}</div>
        </div>
    )
}

function ServerStat() {
    return (
        <div id="SERVERSTAT">
            {statBoxItems.map((item) => {
                return (
                    <StatBox
                        title={item.title}
                        count={item.count}
                        style={item.style}
                        icon={item.icon}
                        key={item.title}
                    />
                )
            })}
        </div>
    )
}

export default ServerStat
