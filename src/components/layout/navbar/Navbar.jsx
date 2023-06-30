import './navbar.css'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Navbar = () => {

  return (
    <div className="header">
      <nav className="nav container">
        <Link to="/"> <img src={logo} className='logo' alt="" />SOLAYMANAIR</Link>
        <div className="nav_menu">
          <ul className='nav_menu-item'>
            <select name="" id="" className='form-select-help'>
           
             <option value="" selected>Help</option>
              <option value="">Schedule</option>
              <option value="">Help line</option>
           
            </select>
            <select name="" id="" className='form-select-help'>
              <option value="" selected>BDT</option>
              <option value="">USD</option>
            </select>
            <Link to="">Sign in</Link>
            <Link to="">Sign up</Link>
          </ul>
        </div>
      </nav>

    </div>
  )
}
