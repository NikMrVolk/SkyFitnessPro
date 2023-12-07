import Input from '../../UI/input/Input'
import s from './ProgressItem.module.css'

export default function ProgressModalItem({ el }) {
    return (
        <label className={s.label}>
            <p className={s.question}>
                Сколько раз вы сделали {el.text.toLowerCase()}?
            </p>
            <Input
                placeholder="Введите значение"
                type="number"
                classes={[s.progressInput]}
                onChange={(e) => {
                    el.quantityUser = e.target.value
                }}
            />
        </label>
    )
}
