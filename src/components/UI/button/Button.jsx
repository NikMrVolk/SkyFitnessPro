import s from './Button.module.css'

function Button({ text, color, ...props }) {
    return (
        <button className={`${s.button} ${s[color]}`} {...props}>
            {text}
        </button>
    )
}

export default Button
