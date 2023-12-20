import Input from '../../UI/input/Input'
import s from './ProgressItem.module.css'

export default function ProgressModalItem({
    el,
    id,
    userProgress,
    setUserProgress,
}) {
    const classesInput = [s.progressInput, s.progressInputColor]
    const progressValue = userProgress[id]

    const handleChange = (value) => {
        const newProgress = [...userProgress]
        newProgress[id] = value
        setUserProgress([...newProgress])
    }

    return (
        <label className={s.label}>
            <p className={s.question}>
                Сколько раз вы сделали {el.name.split('(')[0].toLowerCase()}?
            </p>
            <Input
                placeholder="Введите значение"
                type="number"
                classes={
                    progressValue > el.quantity
                        ? classesInput
                        : classesInput.slice(0, -1)
                }
                min="0"
                value={progressValue}
                onChange={(e) => {
                    if (e.target.value <= el.quantity && e.target.value >= 0) {
                        handleChange(e.target.value)
                    }
                }}
            />
        </label>
    )
}
