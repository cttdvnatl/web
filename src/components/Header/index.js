import React from 'react';
import MainMenu from '../MainMenu';
import './styles.css'

const Header = () => {
  return (
      <div className="header">
        <div className="header-top"> </div>
          <div className="header-content">
              <img className="logo"
                src="http://www.cttdvnatl.org/en/wp-content/uploads/2011/12/logo.png"
                alt="CTTDVNATL.ORG – Website Các Thánh Tử Đạo Việt Nam Atlanta Georgia."
              >
              </img>

              <MainMenu />
            </div>
      </div>
  )
}

export default Header;