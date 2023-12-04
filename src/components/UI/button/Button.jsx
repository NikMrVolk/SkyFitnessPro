import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../../utils/constants'
import {LOGIN_ROUTE } from '../../../utils/constants'
import {REGISTRATION_ROUTE } from '../../../utils/constants'
import s from '../../../styles/components/UI/button/Button.module.css'

const Button = ({type,text, login, children, ...props }) => {
    const { pathname } = useLocation()

    const styles = (pathname === MAIN_ROUTE  ? s.loginBtn : s.btn) 
    
    
    return (
        <button {...props} className={styles}>
            {children}
        </button>
    )
}

export default Button
