import s from '../../../styles/components/UI/button/MoveButton.module.css'

const MoveButton = () => {
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <button className={s.moveBtn} onClick={handleTop}> Наверх ↑</button>
    )
}

export default MoveButton