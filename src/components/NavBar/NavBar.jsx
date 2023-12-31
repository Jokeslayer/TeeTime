import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}</span> &nbsp;&nbsp;
      <Link to="/courses">Our Courses</Link>
      &nbsp; | &nbsp;
      <Link to="/scheduler">Create TeeTime</Link>
      &nbsp; | &nbsp;
      <Link to={`/account/${user._id}`}>Your Outings</Link>
      &nbsp; | &nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}