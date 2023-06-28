import "./stylesButton.scss"

type PropsType = {
    title: string
    onClick?: () => void
    icon?: React.ReactNode
    disabled?: boolean
    type?: "primary" | "danger" | null
}

function Button({ title, onClick, icon, disabled, type }: PropsType) {
    //

    const handleClick = () => {
        if (disabled || !onClick) return

        onClick()
    }

    return (
        <div
            className={
                disabled
                    ? "button__disabled"
                    : type === "primary"
                    ? "button primary__button"
                    : type === "danger"
                    ? "button danger__button"
                    : "button"
            }
            onClick={handleClick}
        >
            {icon ? <div className="button-icon">{icon}</div> : null}
            <div className="button-title">{title}</div>
        </div>
    )
}

export default Button
