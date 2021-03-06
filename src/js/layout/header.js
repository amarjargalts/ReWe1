import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className="container cont_main">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Hidden brand</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rusers">Хэрэглэгчид</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rroles">Эрхүүд</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="#">Баланс</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="#">Албант тушаал</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header