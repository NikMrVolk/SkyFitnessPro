import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../../utils/constants'
import { LOGIN_ROUTE } from '../../../utils/constants'
import { REGISTRATION_ROUTE } from '../../../utils/constants'
import s from './PageWrapper.module.css'

function PageWrapper({ children }) {
    const { pathname } = useLocation()

    const styles = [s.wrapper, 
        pathname === MAIN_ROUTE  ? s.main :
        pathname === LOGIN_ROUTE ? s.main :
        pathname === REGISTRATION_ROUTE ? s.main :
         ''].join(' ')
        

    return <div className={styles}>{children}</div>
   
}

export default PageWrapper
