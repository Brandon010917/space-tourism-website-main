import { motion } from 'framer-motion'

import logo from '../../../assets/shared/logo.svg'
import iconHamburger from '../../../assets/shared/icon-hamburger.svg'
// Components
// import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'

const Header = () => {
  return (
    <motion.header
      initial={{
        y: -100
      }} animate={{
        y: 0,
        transition: {
          duration: 1.5,
          ease: 'linear'
        }
      }} className='w-full flex justify-between items-center p-6 absolute z-20 md:p-0 md:pl-10'
    >
      {/* Logo */}
      <div className=''>
        <img src={logo} alt='Logo' className='lg:min-w-[48px] lg:mr-5 xl:mr-10' />
      </div>
      {/* Icon Hamburger */}
      <div className='md:hidden'>
        <img src={iconHamburger} alt='Icon Hamburger' />
      </div>
      {/* <NavbarMobile /> */}
      <hr className='hidden lg:block lg:min-w-[300px] xl:min-w-[470px] relative translate-x-3 z-10 text-white text-opacity-25' />
      <NavbarDesktop />
    </motion.header>
  )
}

export default Header
