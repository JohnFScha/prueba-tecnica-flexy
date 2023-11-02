import Logo from '../assets/marca-flexy.jpg'
import Menu from '../assets/menu.jpg'
import Backdrop from '../assets/flexy.jpg'
import RegisterBody from '../components/RegisterBody'

export default function Register() {
  return (
    <RegisterBody Menu={Menu} Logo={Logo} Backdrop={Backdrop} />
  )
}
