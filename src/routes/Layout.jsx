import { Outlet, Link } from "react-router-dom"

function Layout(){
  return (
    <div className="Layout">
        <nav className="sidebar">
            <h3 className="logo">Troops</h3>
            <Link style={{ color: "white" }} to="/" className="nav-btn">Home</Link>
            <Link style={{ color: "white" }} to="/Create" className="nav-btn">Create A Troop!</Link>
            <Link style={{ color: "white" }} to="/Gallery" className="nav-btn">Troop Gallery</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout