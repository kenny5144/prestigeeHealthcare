import { Link } from 'react-router-dom'
import { useState } from "react";
import logo from "../../assets/logo.jpg"
const Navbar = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState("Contact");

  return (
    <div className=''>
      <div className='flex  items-center justify-between'>
    <div className='flex items-center'>

      <img className='w-40' src={logo} alt="prestigee logo" />
      <h1 className='text-2xl'>prestigee Healthcare</h1>
    </div>
      <span className='flex gap-3 mr-2'>
        {/* <Link></Link> */}
        <a className='text-xl' href="">Home </a>
        <a className='text-xl' href=""> Our Mission</a>
        <a className='text-xl' href=""> Service </a>
        <a
      href="#"
      onMouseEnter={() => setShowPhoneNumber("9737578155")}
      onMouseLeave={() => setShowPhoneNumber("Contact")}
      className="text-xl inline-block py-2 px-4 bg-Cta hover:bg-Cta text-white rounded relative"
    >
     {showPhoneNumber}
      
    </a>
      </span>
      </div>
    </div>
  )
}

export default Navbar
