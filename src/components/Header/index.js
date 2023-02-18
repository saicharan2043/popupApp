// Write your code here
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="header-bg-color">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        className="logo"
        alt="website logo"
      />
    </Link>
    <div className="po-up-super-container">
      <Popup
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="three-dots" />
          </button>
        }
        position="bottom left"
      >
        {close => (
          <>
            <div className="pop-up-container">
              <button
                className="close-btn"
                type="button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="img-close" />
              </button>
              <ul className="pop-up-sub-container">
                <Link to="/" className="link">
                  <li className="home-container">
                    <AiFillHome className="home-icon" />
                    <p className="home-text">Home</p>
                  </li>
                </Link>
                <Link to="/about" className="link">
                  <li className="home-container">
                    <BsInfoCircleFill className="about-icon" />
                    <p className="about-text">About</p>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
