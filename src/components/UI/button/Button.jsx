import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../../utils/constants'
import s from './Button.module.css'

const Button = ({ children, ...props }) => {
    const { pathname } = useLocation()

    const styles = pathname === MAIN_ROUTE ? s.loginBtn : s.btn

    return (
        <button {...props} className={styles}>
            {children}
        </button>
    )
}

export default Button
