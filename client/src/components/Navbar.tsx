import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-title">
        <Link to='/'>
          <h2>View Events</h2>
        </Link>
      </div>
      <div className="nav-title">
        <Link to='/create'>
          <h2>Create Event</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;