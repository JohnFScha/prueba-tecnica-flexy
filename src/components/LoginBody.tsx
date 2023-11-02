import LoginForm from './LoginForm'
import { Link } from 'react-router-dom';

type Props = {
  Logo: string,
  Menu: string,
  Backdrop: string
}

export default function LoginBody({
  Logo,
  Menu,
  Backdrop
}: Props) {
  return (
    <main className="grid lg:grid-cols-2 sm:grid-cols-1 min-h-screen">
      <section className='flex flex-col gap-5'>
        <header className='flex justify-between border-b-2 border-neutral-200 p-5 justify-self-start'>
          <img src={Logo} alt="flexy logo" />
          <img src={Menu} alt="menu-placeholder" className='lg:hidden opacity-60 p-2' />
        </header>
        <div className='flex flex-col items-stretch w-7/12 pt-10 m-auto gap-5 border-neutral-300'>
          <h1 className='lg:text-4xl sm:text-3xl font-bold sm:text-center lg:text-start'>¡Bienvenido!</h1>
          <h2 className='text-neutral-500 lg:text-base sm:text-sm sm:text-center lg:text-start lg:ps-2'>Inciá sesión en Flexy.</h2>
          <LoginForm />
          <p className='text-center'>¿No tenes cuenta? <Link to={'/'}><strong>Regístrate.</strong></Link></p>
        </div>
      </section>
      <section className='lg:flex sm:hidden'>
        <img src={Backdrop} alt="backdrop image" />
      </section>
    </main>
  )
}
