import s from './Button.module.css'

function Button({ children, color, onClick }) {
    return (
        <button className={`${s.button} ${s[color]}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
