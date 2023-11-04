import { User } from '../store/userStore';
import { useState, useRef, useImperativeHandle } from 'react';
import { loginSuccess, loginFailure } from '../utils/SweetAlert'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

type FormValues = {
  email: string,
  password: string
}

export default function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const passRef = useRef<HTMLInputElement | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { ref } = register('password')
  useImperativeHandle(ref, () => passRef.current)
  const state = sessionStorage.getItem('userState')
  const user: User = JSON.parse(state as string)

  let passInput = passRef.current?.type

  const onSubmit = (data: FormValues) => {
    console.log(data)
    const emailCheck = user.email === data.email
    const passwordCheck = user.password === data.password

    if (emailCheck && passwordCheck) {
      loginSuccess(user)
    } else {
      loginFailure(user.email)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7'>
      <label htmlFor="email" className='flex flex-col'>
        <input
          type="email"
          placeholder='hola@tuemail.com'
          autoComplete='username'
          {...register("email", { 
            required: true
          })}
          className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none'
        />
      </label>
      <label htmlFor="password" className='flex flex-col'>
        <div className='flex bg-background border-2 border-border rounded-lg'>
          <input
            type={passwordShown ? "text" : "password"}
            id='password'
            placeholder='Ingresá tu contraseña'
            className='w-[100%] bg-background p-3 focus:outline-none' autoComplete='current-password'
            {...register("password", { 
              required: true
            })}
            ref={passRef}
          />
          {errors?.email ? <p className='text-center p-1 text-red-400'>{errors.email?.message as string}</p> : null}
          <button className='p-2' type='button' onClick={() => setPasswordShown(!passwordShown)}>
            {passInput === 'password' ? <AiOutlineEyeInvisible className="text-2xl opacity-50" /> : <AiOutlineEye className="text-2xl opacity-50" />}
          </button>
        </div>
        {errors?.password ? <p className='text-center p-1 text-red-400'>{errors.password?.message as string}</p> : null}
      </label>
      <button type="submit" className='bg-primary text-white border-2 p-3 rounded-lg font-bold'>Iniciar Sesión</button>
    </form>
  )
}
