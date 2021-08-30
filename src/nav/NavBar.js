import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
const currentUser = localStorage.getItem("kandy_customer")

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/productList">Product List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/productTypes">Product Types</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to={`/orders/${currentUser}`}>My orders</Link>  
            </li>
            {/* Why does this take so long to update when a new user logs in? */}
            <li className="navbar__item active">
                <Link className="navbar__link" to="/login" onClick={
                    () => localStorage.removeItem("kandy_customer")
                }>Logout</Link>
            </li>
        </ul>
    )
}
