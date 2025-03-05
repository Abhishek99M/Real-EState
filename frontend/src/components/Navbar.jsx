import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddPropertyModal from './AddPropertyModal'
import userAuthCheck from '../hooks/userAuthCheck'
const Navbar = ({containerStyles}) => {

  const [moalOpened, setModalOpened] = useState(false)
  const {validateLogin} = userAuthCheck()
  const handleAddPropertyClick = () => {
    if(validateLogin()){
      setModalOpened(true)
    }
  }
  return (
    <div>
        <nav className={`${containerStyles}`}>
          <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link py-1' : 'py-1 '}>
            Home
          </NavLink>
          <NavLink to={'/listing'} className={({isActive}) => isActive ? 'active-link py-1' : 'py-1 '}>
            Listing
          </NavLink>
          <NavLink to={'mailto:eg.abhishekkumar2004@gmail.com'} className={({isActive}) => isActive ? 'active-link py-1' : 'py-1 '}>
            Contact
          </NavLink>
          <div onClick={handleAddPropertyClick} className={'py-1 cursor-pointer'}>
            Add Property
          </div>
          <AddPropertyModal opened={moalOpened} setOpened={setModalOpened}/>
        </nav>
        
    </div>
  )
}

export default Navbar
