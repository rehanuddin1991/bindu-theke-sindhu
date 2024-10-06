import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { authContext } from '../../Provider/AuthProvider'



const Navbar = () => {
    const navLinkCSS=({isActive})=>
    {
        return {
            fontWeight:isActive? "bold": "normal",
            color:isActive? "red": "white",
            
        }
    }
    const navigate = useNavigate()
    const { user, setUser, mySignOut } = useContext(authContext)
    const handleSignout = () => {

        mySignOut().then(
            (res) => { navigate("/") }
        )

    }
    return (
        <div >
            <div className="navbar     text-[whitesmoke]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  md:hidden lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 text-[darkcyan] text-3xl
                             rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li> <Link to="/" className="">Home</Link> </li>
                            <li><Link to="/course" className="">Course</Link></li>
                            {
                            user ? (<li> <span className='text-xs text-[indigo]' >{user.displayName?user.displayName : user.email}</span> <br />
                                <Link onClick={handleSignout} className="text-[darkcyan] -mt-8     ">
                                    Logout</Link> &nbsp;</li>

                            )
                                :
                                (                      <li>
                                        <Link to="/login" className="text-[darkcyan]      ">Login</Link> &nbsp;
                                    </li>
                                )

                        }
                            <li className='-mt-8'><Link to="/register"  >Register
                            </Link></li>

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xs md:text-xs sm:text-xl lg:text-2xl ">
                        <span className='text-[blanchedalmond] font-bold shadow-2xl text-xl'> <sub>Bindu</sub> </span> Theke
                        <span className='text-[aliceblue] font-bold shadow-2xl text-xl'> <sup>Sindhu</sup>  </span></Link>
                </div>
                <div className="navbar-center hidden lg:flex md:flex">
                    <nav className="menu menu-horizontal px-1">
                        <NavLink   to="/" className="btn   btn-primary">Home</NavLink>&nbsp;&nbsp;
                        <NavLink   to="/course" className="btn   btn-accent">Course</NavLink> &nbsp;&nbsp;

                        &nbsp;&nbsp;
                        {
                            
                            user ? (<div> <span >
                                  {user.displayName?user.displayName : user.email}</span> &nbsp;
                                <Link onClick={handleSignout} className="text-white w-24 font-bold btn btn-info">
                                    Logout</Link> &nbsp;</div>

                            )
                                :
                                (
                                    <div>
                                        <Link to="/login" className="text-white w-24 font-bold btn btn-info">Login</Link> &nbsp;
                                    </div>
                                )

                        }

                        <Link to="/register" className="btn w-24 text-white font-bold btn-success">Register
                        </Link>

                         


                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Navbar