import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import './Header.css'

const Header = () => {
    return (
        <>
          
            <div className="name">
            <div className="company"><img src="https://see.fontimg.com/api/renderfont4/Dj83/eyJyIjoiZnMiLCJoIjo0NSwidyI6MTUwMCwiZnMiOjMwLCJmZ2MiOiIjRkZGQkZCIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RFVOREVSIE1JRkZMSU4/marvel-regular.png" alt="Marvel fonts" width="350px"/></div>
            <div className="sub"><img src="https://see.fontimg.com/api/renderfont4/VGdn0/eyJyIjoiZnMiLCJoIjoxOCwidyI6MTUwMCwiZnMiOjEyLCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Qk9PSyBDT01QQU5Z/bubble-rainbow.png" alt="Calligraphy fonts" width="200px"/></div>
            </div>
            

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid py-auto">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="home nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="books nav-item">
                                <NavLink className="nav-link" to="/products">Books</NavLink>
                            </li>
                            <li className="about nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="contact nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                        </ul>
                    
                    <Login/>
                    <Signup/>
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
