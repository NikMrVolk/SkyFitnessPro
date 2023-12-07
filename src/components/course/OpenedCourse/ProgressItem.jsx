import { useState, useEffect } from 'react'
import Input from '../../UI/input/Input'
import s from './ProgressItem.module.css'

export default function ProgressModalItem({ el }) {
    const classesInput = [s.progressInput, s.progressInputColor]
    const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log("value", value)
    })

    return (
        <label className={s.label}>
            <p className={s.question}>
                Сколько раз вы сделали {el.text.toLowerCase()}?
            </p>
            <Input
                placeholder="Введите значение"
                type="number"
                classes={
                    value > el.quantity
                        ? classesInput
                        : classesInput.slice(0, -1)
                }
                min="0"
                max={el.quantity}
                onChange={(e) => {
                    if (
                        e.target.value.length > 0 &&
                        e.target.value.length < el.quantity
                    ) {
                        el.quantityUser = e.target.value
                        setValue(e.target.value)
                    }
                }}
            />
        </label>
    )
}
