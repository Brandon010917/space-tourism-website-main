import { NavLink } from 'react-router-dom'

const NavbarDesktop = () => {
  const links = ['home', 'destination', 'crew', 'technology']

  return (
    <nav className='bg-white bg-opacity-[0.04] backdrop-blur-3xl hidden md:block text-white min-w-[450px] px-12 pt-10 lg:w-full'>
      <ul className='flex justify-between items-center gap-9 xl:gap-12'>
        {
          links.map((link, i) => (
            <li key={link}>
              <NavLink to={`/${link === 'home' ? '' : link}`} className={({ isActive }) => `uppercase font-barlow-condensed tracking-[2.35px] pb-10 inline-block text-sm lg:text-base ${isActive ? 'border-b-[3px] border-white' : ''}`}>
                <span className='hidden lg:inline-block mr-3 font-bold'>0{`${i}`}</span>
                {link}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavbarDesktop
