import s from './LoginButton.module.css'

const LoginButton = ({ children, onClick }) => {
    return (
        <button className={s.loginButton} onClick={onClick}>
            {children}
        </button>
    )
}

export default LoginButton
