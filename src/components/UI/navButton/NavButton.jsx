import s from './NavButton.module.css'

function NavButton({ children, onClick }) {
    return (
        <button className={s.navButton} onClick={onClick}>
            {children}
        </button>
    )
}

export default NavButton
