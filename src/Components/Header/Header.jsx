import React from 'react'
import '../Header/Header.css'
import { FiPhoneCall } from 'react-icons/fi'

const Header = () => {
  return (
    <div className='container-fluid header'>
        <div className="row align-items-center">
            <div className='mobile'>
                {/* 1st div */}
                <div className="d-flex align-items-center">
                <p><FiPhoneCall/></p>
                <p>+91 8888 4444 20</p>
                </div>
                {/* 2nd div */}
                <div className='flex'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;
