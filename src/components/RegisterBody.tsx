import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

type Props = {
  Logo: string,
  Menu: string,
  Backdrop: string
}

export default function RegisterBody({
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
        <div className='flex flex-col lg:items-stretch lg:w-8/12 sm:w-10/12 lg:pt-10 lg:px-0 lg:mx-auto sm:px-20 my-10 gap-5 border-neutral-300'>
          <h1 className='lg:text-4xl sm:text-3xl font-bold sm:text-center lg:text-start'>¡Bienvenido!</h1>
          <h2 className='text-neutral-500 lg:text-lg sm:text-base sm:text-center lg:text-start'>Conviertete ahora en un agente Flexy.</h2>
          <RegisterForm />
          <p className='text-center'>¿Ya tenes cuenta? <Link to={'/login'}><strong>Iniciá Sesión.</strong></Link></p>
        </div>
      </section>
      <section className='lg:flex sm:hidden'>
        <img src={Backdrop} alt="backdrop image" />
      </section>
    </main>
  );
}
