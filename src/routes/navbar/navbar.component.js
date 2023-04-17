import { Outlet } from "react-router";
import "./navbar.styles.scss"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/"><strong><i class="fa-solid fa-circle-nodes fa-spin"></i>  My Website</strong></a>
                
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;