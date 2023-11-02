import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { User } from '../store/userStore';


const MySwal = withReactContent(Swal);

const registerSuccess = (user: User) => MySwal.fire({
  title: `¡Bienvenido a Flexy ${user.fullName}!`,
  icon: 'success',
  confirmButtonColor: '#7065F0'
})

const loginSuccess = (user: User) => MySwal.fire({
  title: `¡${user.fullName} logueado!`,
  icon: 'success',
  confirmButtonColor: '#7065F0'
})

const loginFailure = (email: string) => MySwal.fire({
  title: `Email: ${email} or password incorrect`,
  icon: 'error',
  confirmButtonColor: 'red'
})

export { registerSuccess, loginSuccess, loginFailure }