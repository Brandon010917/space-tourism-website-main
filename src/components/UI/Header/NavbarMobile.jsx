// import axios from 'axios'
// import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import iconClose from '../../../assets/shared/icon-close.svg'

const NavbarMobile = () => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios('./src/data.json')

  //   }

  //   getData()
  // }, [])

  const links = ['home', 'destination', 'crew', 'technology']

  return (
    <nav className='bg-white bg-opacity-[0.04] backdrop-blur-3xl min-h-screen fixed top-0 right-0 min-w-[254px] p-8 pr-6 text-white'>
      <div className='pt-2 flex justify-end'>
        <img src={iconClose} alt='Icon Close' />
      </div>
      <ul className='flex flex-col gap-y-8 mt-16'>
        {
            links.map((link, i) => (
              <li key={i}>
                <NavLink to={`/${link}`} className='uppercase font-barlow-condensed tracking-[2.7px]'>
                  <span className='inline-block mr-3 font-bold'>0{`${i}`}</span>
                  {link}
                </NavLink>
              </li>
            ))
        }
      </ul>
    </nav>
  )
}

export default NavbarMobile
