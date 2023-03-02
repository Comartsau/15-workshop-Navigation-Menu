
import {AiOutlineMenu , AiFillCloseSquare} from "react-icons/ai"
import { useState } from "react"
import {Link as NavLink} from "react-router-dom"

import MenuData from "../data/MenuData"

import "./Navigation.css"



function Navigation() {
    const [showMenu, setShowMenu] = useState(false)


  return (
    <aside>
        <div className="navbar">
            <div className="navbar-toggle">
                <NavLink to ="#" className="menu-bar" onClick= {(() => setShowMenu(!showMenu))}>
                    <AiOutlineMenu />
                </NavLink>
            </div>
        </div>
        <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-item" onClick={(() => setShowMenu(!showMenu))}>
                <li className="navbar-toggle">
                    <NavLink to ="#" className="menu-bar" >
                        <AiFillCloseSquare />
                    </NavLink>
                </li>

                {MenuData.map((menu,key) => {

                 return (
                    <li className="menu-text" key={key}>
                        <NavLink to={menu.path}>{menu.icon}<span>{menu.title}</span></NavLink>
                    </li>
                )})
                }
            </ul>
        </nav>
    </aside>
  )
}

export default Navigation