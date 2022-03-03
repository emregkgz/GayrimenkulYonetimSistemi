import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      {" "}
      <div className="page-header">
        {/*<!-- BEGIN HEADER MENU -->  */}
        <div className="page-header-menu">
          <div className="container">
            {/* 	<!-- BEGIN HEADER SEARCH BOX --> */}
            <form
              className="search-form"
              action="extra_search.html"
              method="GET"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="query"
                />
                <span className="input-group-btn">
                  <a href="#" className="btn submit">
                    <i className="icon-magnifier"></i>
                  </a>
                </span>
              </div>
            </form>
            {/* 			<!-- END HEADER SEARCH BOX -->
			<!-- BEGIN MEGA MENU -->
			<!-- DOC: Apply "hor-menu-light" className after the "hor-menu" className below to have a horizontal menu with white background -->
			<!-- DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover --> */}
            <div className="hor-menu ">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="menu-dropdown classNameic-menu-dropdown ">
                  <a
                    data-hover="megamenu-dropdown"
                    data-close-others="true"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Proje Yönetimi <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu pull-left">
                    <li className=" dropdown-submenu">
                      <a href="#">
                        <i className="icon-briefcase"></i>
                        Proje{" "}
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <Link to="/FormProjeApp">Yeni Giriş </Link>
                        </li>
                        <li className=" ">
                          <Link to="/listeleproje">Liste </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" dropdown-submenu">
                      <a href="#">
                        <i className="icon-home"></i>
                        Daire{" "}
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <Link to="/formdaire">Yeni Giriş </Link>
                        </li>
                        <li className=" ">
                          <Link to="/listeledaire">Liste </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" dropdown-submenu">
                      <a href="#">
                        <i className="icon-user"></i>
                        Çalışan{" "}
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <Link to="/formcalisan">Yeni Giriş </Link>
                        </li>
                        <li className=" ">
                          <Link to="/listecalisan">Liste </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-dropdown classNameic-menu-dropdown ">
                  <a
                    data-hover="megamenu-dropdown"
                    data-close-others="true"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Müşteri Yönetimi <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu pull-left">
                    <li className=" dropdown-submenu">
                      <a href="#">
                        <i className="icon-user-female"></i>
                        Müşteri{" "}
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <Link to="/formmusteri">Yeni Giriş </Link>
                        </li>
                        <li className=" ">
                          <Link to="/listelemusteri">Liste </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" dropdown-submenu">
                      <a href="#">
                        <i className="icon-eye"></i>
                        Ziyaret{" "}
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <Link to="/formZiyaret">Yeni Giriş </Link>
                        </li>
                        <li className=" ">
                          <Link to="/listeleziyaret">Liste </Link>
                        </li>
                      </ul>
                    </li>
                    <li className=" dropdown-submenu">
                      <a href="#">
                        <i className="icon-rocket"></i>
                        Satış{" "}
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <Link to="/formsatis">Yeni Giriş </Link>
                        </li>
                        <li className=" ">
                          <Link to="/listelesatis">Liste </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-dropdown classNameic-menu-dropdown ">
                  <a
                    data-hover="megamenu-dropdown"
                    data-close-others="true"
                    data-toggle="dropdown"
                    href="#"
                  >
                    İçerik Yönetimi <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu pull-left">
                    <li className=" mega-menu-submenu">
                      <Link to="/listelecinsiyet">
                        <i className="icon-settings"></i>
                        Cinsiyet{" "}
                      </Link>
                    </li>
                    <li className=" mega-menu-submenu">
                      <Link to="/listeledairetipi">
                        <i className="icon-settings"></i>
                        Daire Tipi{" "}
                      </Link>
                    </li>
                    <li className=" mega-menu-submenu">
                      <Link to="/listelegelirtipi">
                        <i className="icon-settings"></i>
                        Gelir Tipi{" "}
                      </Link>
                    </li>
                    <li className=" mega-menu-submenu">
                      <Link to="/listeleprojedurumu">
                        <i className="icon-settings"></i>
                        Proje Durumu{" "}
                      </Link>
                    </li>
                    <li className=" mega-menu-submenu">
                      <Link to="/listelesehir">
                        <i className="icon-settings"></i>
                        Şehir{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* 	<!-- END MEGA MENU --> */}
          </div>
        </div>
        {/* <!-- END HEADER MENU --> */}
      </div>
    </>
  );
}

export default Menu;
