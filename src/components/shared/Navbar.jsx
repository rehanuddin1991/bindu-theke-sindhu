import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className='container'>
                <div className="navbar  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <Link to="/" className="btn">Home</Link>
                                <Link to="/course" className="btn">Course</Link>
                                
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl">Bindu Theke Sindhu</Link>
                    </div>
                    <div className="navbar-center  hidden lg:flex">
                        <ul className="menu menu-horizontal px-2">
                        <Link to="/" className="btn btn-active btn-primary">Home</Link>&nbsp;&nbsp;
                        <Link to="/course" className="btn btn-accent">Course</Link>
                             
                            
                        </ul>
                    </div>
                    <div className="navbar-end   lg:flex px-3 ">
                        <Link to="/login" className="text-white w-24 font-bold btn btn-info">Login</Link> &nbsp;
                        <Link to="/register" className="btn w-24 text-white font-bold btn-success">Register</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar