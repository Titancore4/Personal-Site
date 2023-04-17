import "./navbar.styles.scss"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/"><i class="fa-solid fa-circle-nodes fa-spin"></i> <strong>Welcome To My Site</strong></a>
                
                </div>
            </nav>
        </div>
    )
}

export default Navbar;