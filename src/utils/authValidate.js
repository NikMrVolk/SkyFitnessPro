import { toast } from 'react-toastify'

export const validateEmail = (email, setError) => {
    if (email.length < 4) {
        toast('Логин должен быть больше 4 символов')
        setError('email')

        return false
    }
    if (email.includes('<') || email.includes('>')) {
        toast('Логин не может содержать < или >')
        setError('email')

        return false
    }

    return true
}

export const validatePassword = (password, setError) => {
    if (password.length < 4 || !/[A-Z]/.test(password)) {
        toast('Пароль должен быть больше 4 символов и иметь хотябы одну заглавную букву')
        setError('password')

        return false
    }
    if (password.includes('<') || password.includes('>')) {
        toast('Пароль не может содержать < или >')
        setError('password')

        return false
    }

    return true
}

export const samePasswords = (password, repeatPassword, setError) => {
    if (password !== repeatPassword) {
        toast('Пароли не совпадают')
        setError('password')

        return false
    }

    return true
}
