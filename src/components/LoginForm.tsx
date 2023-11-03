import { User } from '../store/userStore';
import { PasswordButton } from './PasswordButton';
import { FormEvent, useState } from 'react';
import { loginSuccess, loginFailure } from '../utils/SweetAlert'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const state = sessionStorage.getItem('userState')
  const user: User = JSON.parse(state as string)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailCheck = user.email === email
    const passwordCheck = user.password === password

    if (emailCheck && passwordCheck) {
      loginSuccess(user)
    } else {
      loginFailure(email)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
      <input type="email" name="email" placeholder='hola@tuemail.com' className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none' autoComplete='username' required value={email} onChange={e => setEmail(e.target.value)} />
      <PasswordButton password={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" className='bg-primary text-white border-2 p-3 rounded-lg font-bold'>Iniciar Sesión</button>
    </form>
  )
}
