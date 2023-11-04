import { useRef, useState, useImperativeHandle } from 'react'
import { User, useStore } from '../store/userStore';
import { useForm } from 'react-hook-form'
import { registerSuccess } from '../utils/SweetAlert';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import ProfilePicture from './ProfilePicture';

type FormValues = {
  fullName: string,
  cellPhone: string,
  email: string,
  password: string
}

export default function LoginForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const passRef = useRef<HTMLInputElement | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { ref } = register('password')
  const store = useStore()
  useImperativeHandle(ref, () => passRef.current)

  let passInput = passRef.current?.type

  const onSubmit = (data: FormValues) => {
    store.setUser(data as User)
    registerSuccess(data as User)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-stretch gap-7'>
      <ProfilePicture />
      <label htmlFor="fullName" className='flex flex-col'>
        <input
          type="text"
          placeholder='Nombre y Apellido'
          autoComplete='fullName'
          id='fullName'
          {...register("fullName", {
            required: true,
            pattern: {
              value: /^[A-Za-z]{2,}( [A-Za-z]{2,})+$/i,
              message: 'Debe ingresar nombre y apellido'
            }
          })}
          aria-invalid={errors.fullName ? true : false}
          className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none'
        />
        {errors?.fullName ? <p className='text-center p-1 text-red-400'>{errors.fullName?.message as string}</p> : null}
      </label>
      <label htmlFor="cellPhone" className='flex flex-col'>
        <input
          type="tel"
          autoComplete='telephone'
          placeholder='+541123685458'
          id='cellPhone'
          {...register("cellPhone", {
            required: true,
            pattern: {
              value: /^\+(?:\d+)?(\d{4,5})?(15)?(\d{6,})$/i,
              message: 'Ingresa un telefono valido'
            }
          })}
          aria-invalid={errors.cellPhone ? true : false}
          className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none'
        />
        {errors?.cellPhone ? <p className='text-center p-1 text-red-400'>{errors.cellPhone?.message as string}</p> : null}
      </label>
      <label htmlFor="email" className='flex flex-col'>
        <input
          type="email"
          placeholder='hola@tuemail.com'
          autoComplete='username'
          id='email'
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i,
              message: 'Ingrese un email valido'
            }
          })}
          aria-invalid={errors.email ? true : false}
          className='bg-background border-2 p-3 rounded-lg border-border focus:outline-none'
        />
        {errors?.email ? <p className='text-center p-1 text-red-400'>{errors.email?.message as string}</p> : null}
      </label>
      <label htmlFor="password" className='flex flex-col'>
        <div className='flex bg-background border-2 border-border rounded-lg'>
          <input
            type={passwordShown ? "text" : "password"}
            placeholder='Ingresá tu contraseña'
            id='password'
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).{8,}$/i,
                message: 'Debe contener al menos un numero, un caracter y un simbolo'
              }
            })}
            ref={passRef}
            aria-invalid={errors.password ? true : false}
            className='w-[100%] bg-background p-3 focus:outline-none' autoComplete='current-password'
          />
          <button className='p-2' type='button' onClick={() => setPasswordShown(!passwordShown)}>
            {passInput === 'password' ? <AiOutlineEyeInvisible className="text-2xl opacity-50" /> : <AiOutlineEye className="text-2xl opacity-50" />}
          </button>
        </div>
        {errors?.password ? <p className='text-center p-1 text-red-400'>{errors.password?.message as string}</p> : null}
      </label>
      <input type="submit" className='bg-primary text-white border-2 p-3 rounded-lg font-bold cursor-pointer' />
    </form>
  )
}
