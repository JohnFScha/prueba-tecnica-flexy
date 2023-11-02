import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ChangeEventHandler, useRef, useState } from 'react'

export function PasswordButton({ password, onChange }: { password: string, onChange: ChangeEventHandler<HTMLInputElement> }) {
  const passRef = useRef<HTMLInputElement | null>(null)
  const [passwordShown, setPasswordShown] = useState(false);
  let passInput = passRef.current?.type

  
  return (
    <label htmlFor="password" className='flex bg-background border-2 border-border rounded-lg'>
      <input type={passwordShown ? "text" : "password"} id='password' name="password" placeholder='Ingresá tu contraseña' className='w-[100%] bg-background p-3 focus:outline-none' autoComplete='current-password' value={password} required ref={passRef} onChange={onChange} />
      <button className='p-2' type='button' onClick={() => setPasswordShown(!passwordShown)}>
        {passInput === 'password' ? <AiOutlineEyeInvisible className="text-2xl opacity-50" /> : <AiOutlineEye className="text-2xl opacity-50" />}
      </button>
    </label>
  )
}
