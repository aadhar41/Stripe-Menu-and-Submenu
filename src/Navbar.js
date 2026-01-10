import React, { useEffect } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  }

  // useEffect(() => {
  //   const handleSubmenu = (e) => {
  //     if (!e.target.classList.contains('link-btn')) {
  //       closeSubMenu();
  //     }
  //   }
  //   document.addEventListener('mouseover', handleSubmenu);
  //   return () => {
  //     document.removeEventListener('mouseover', handleSubmenu);
  //   }
  // }, [])

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='nav-logo' alt="Stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={displaySubMenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar
