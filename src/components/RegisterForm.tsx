import { FormEvent, useRef, useState } from 'react';
import { useStore } from '../store/userStore';
import { PasswordButton } from './PasswordButton';
import extractInfo from '../utils/extractInfo';
import { registerSuccess } from '../utils/SweetAlert';
import Image from '../assets/gallery.jpg'

export default function LoginForm() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [password, setPassword] = useState('')
  const store = useStore()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(formRef.current) {
      const formData = new FormData(formRef.current)
      const user = extractInfo(formData)
      store.setUser(user)
      registerSuccess(user)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-7' ref={formRef}>
      <label htmlFor="">
        <img src={Image} alt="profile picture" />
        <input type="file" id='profilePicture' name='profilePicture' required/>
        Sube tu foto de perfil
      </label>
      <input type="text" name="fullName" placeholder='Nombre y Apellido' className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none' autoComplete='fullName' required />
      <input type="tel" name="cellPhone" placeholder='+541123685458' className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none' autoComplete='telephone' required />
      <input type="email" name="email" placeholder='hola@tuemail.com' className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none' autoComplete='username' required />
      <PasswordButton password={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" className='bg-primary text-white border-2 p-3 rounded-lg font-bold'>Registrarse</button>
    </form>
  )
}
