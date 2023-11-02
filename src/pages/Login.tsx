import Logo from '../assets/marca-flexy.jpg'
import Menu from '../assets/menu.jpg'
import Backdrop from '../assets/flexy.jpg'
import LoginBody from '../components/LoginBody'

export default function Login() {
  return (
    <LoginBody Menu={Menu} Logo={Logo} Backdrop={Backdrop} />
  )
}
