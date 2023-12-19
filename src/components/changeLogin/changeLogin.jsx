import { getAuth, updateEmail } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setEmail } from '../../store/slices/userSlice'
import Modal from '../UI/modal/Modal'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import {
    reauthenticateWithCredential,
    EmailAuthProvider,
    sendEmailVerification,
  } from "firebase/auth"


export function ChangeLogin() {
    const auth = getAuth()
    const dispatch = useDispatch()
    const [newEmail, setNewEmail] = useState('')
    const [error, setError] = useState('')
    const [offButton, setOffButton] = useState(false)
    const user = auth.currentUser

   const validateNewEmail = (newEmail, setError) => {
        if (newEmail.length < 4) {
            toast('Логин должен быть больше 4 символов')
            setError('newEmail')
    
            return false
        }
        if (newEmail.includes('<') || newEmail.includes('>')) {
            toast('Логин не может содержать < или >')
            setError('newEmail')
    
            return false
        }
    
        return true
    }


    const updateEmail = async()=> {
     if( validateNewEmail() )  {
        try {
    const response = await handleChangeLogin();
    dispatch(
        setEmail({
          email: newEmail,
        })
    )
    setOffButton(true);
    } catch (error) {
            if (error.message.includes('auth/invalid-email')) {
                setError('Введен некорректный email')
            } else {
                setError(error.message)
            }
        }
        finally {
            setOffButton(false);
        }
    }
}
    return (
        <Modal >
            <img src="/img/logo/blackLogo.svg" alt="logo" />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    width: '278px',
                }}
            >
                <h3  className={s.textChangeData}>
                   Новый логин
                </h3>
                <Input
                    placeholder="Новый логин"
                    value={newEmail}
                    onChange={(event) => {
                        setNewEmail(event.target.value)
                    }}
                />
                <Button color="purple" onClick={updateEmail} disabled={offButton}>
                {offButton ? "Подождите" : "Сохранить"}
                </Button>
            </div>
        </Modal>
    )
}

  export async function handleChangeLogin() {
    const auth = getAuth();
  
    try {
      // Повторная аутентификация перед изменением  электронной почты
      await reauthenticateWithCredential(
        auth.currentUser,
        EmailAuthProvider.credential(auth.currentUser.email)
      );
  
      // Отправляем подтверждение по электронной почте (нужно?)
      await sendEmailVerification(auth.currentUser);
  
      // Изменение  электронной почты
      await updateEmail(auth.currentUser, newEmail);

    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
