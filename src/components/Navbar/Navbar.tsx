import React, { useState } from "react";

const Navbar = () => {
  const [showBurguerMenu, setShowBurguerMenu] = useState(false);

  const toggleBurguerMenu = () => {
    setShowBurguerMenu(!showBurguerMenu);
  };

  return (
    <div className="Navbar">
      <nav
        className="navbar is-light is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
          <a
            onClick={toggleBurguerMenu}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          {/* <div className="navbar-start"></div> */}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link is-arrowless">
                    <span className="icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <span>Admin</span>
                  </a>

                  <div className="navbar-dropdown is-right">
                    <a className="navbar-item">Meu perfil</a>
                    <a className="navbar-item">Alterar Senha</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Sair</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
