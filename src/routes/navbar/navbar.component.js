import { Outlet } from "react-router";
import "./navbar.styles.scss"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><strong>Portfolio</strong></a>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-2 mb-2 mb-lg-0">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="#">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="#">Contact</a>
                    </li>

                    </ul>
                </div>
                
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;