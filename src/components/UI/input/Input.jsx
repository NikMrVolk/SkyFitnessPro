import s from './Input.module.css'

export default function Input({ classes, placeholder, type, ...props }) {
    const classesJoin = classes?.join(' ')

    return (
        <input
            placeholder={placeholder}
            className={s.input + ' ' + classesJoin}
            type={type}
            {...props}
        />
    )
}
