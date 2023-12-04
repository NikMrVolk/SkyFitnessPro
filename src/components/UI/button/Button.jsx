import { useLocation } from 'react-router-dom'
import { MAIN_ROUTE } from '../../../utils/constants'
import s from '../../../styles/components/UI/button/Button.module.css'

// const Button = ({ children, ...props }) => {
//     const { pathname } = useLocation()

//     const styles = (pathname  ? s.loginBtn : s.btn) 
    
    
//     return (
//         <button {...props} className={styles}>
//             {children}
//         </button>
//     )
// }

// export default Button
function Button({ text, color, onClick }) {
    return (
      <button className={`${s.button} ${s[color]}`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;
