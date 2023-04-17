import "./navbar.styles.scss"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/"><i class="fa-solid fa-circle-nodes fa-spin"></i> <strong>My Website</strong></a>
                
                </div>
            </nav>
        </div>
    )
}

export default Navbar;