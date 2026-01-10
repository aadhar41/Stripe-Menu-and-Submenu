import React from 'react'
import { FaTimes, FaAngleDown } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen, openSubMenu, closeSubMenu } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <div className="sidebar">
        <button className="btn close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className="sidebar-links">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <li key={index}>
                <h4>
                  {page}
                </h4>
                <ul className="sidebar-sublinks">
                  {links.map((link, subIndex) => {
                    const { label, url, icon } = link;
                    return (
                      <li key={subIndex}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
