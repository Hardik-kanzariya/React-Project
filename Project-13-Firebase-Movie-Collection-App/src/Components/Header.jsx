import { Button, Container, Dropdown } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; 
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync } from "../Services/Actions/userAction";
import { FaUser } from "react-icons/fa6";

function Header() {
   const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutAsync());
  }

  return (
    <>
      <header className="bookmyshow-header">
        <Container className="d-flex align-items-center justify-content-between gap-3">
          <Link to="/">
            <img src={logo} alt="BookMyShow" className="logo" />
          </Link>

          <div className="search-box d-flex align-items-center flex-grow-1 mx-3">
            <IoIosSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for Movies and Events"
              className="search-input"
            />
          </div>

          <div className="d-flex align-items-center gap-3">
            <span>Surat ▾</span>
            {user && (
    <Link to="/add-movie" className="menu-link">Add Movie</Link>
  )}
          </div>
          {!user ? (
  <Link to="/signIn" className="btn btn-danger btn-sm">Sign In</Link>
) : (
  <Dropdown align="end">
    <Dropdown.Toggle variant="secondary" size="sm" id="user-dropdown">
      <FaUser /> {user.email}

      <Dropdown.Menu>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown.Toggle>
  </Dropdown>
)}


        </Container>
      </header>

      <div className="bottom-nav">
  <Container className="d-flex justify-content-between">
    <ul className="nav-left d-flex gap-4">
      <li>Movies</li>
      <li>Stream</li>
      <li>Plays</li>
      <li>Activities</li>
      <li>Events</li>
      <li>Sports</li>
    </ul>
    <ul className="nav-right d-flex gap-4">
      <li>Offers</li>
      <li>Gift Cards</li>
    </ul>
  </Container>
</div>
    </>
  );
}

export default Header;
