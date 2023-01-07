import "../Assets/CSS/style.css";
import logo from "../Assets/Images/kyro.png";
import {
  Menu,
  Logout,
  Home,
  Dashboard,
  ReceiptLong,
  Message,
  Assignment,
  CorporateFare,
  SettingsRounded,
} from "@mui/icons-material";

const MenuBar = () => {
  return (
    <div className="container vh-100">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} alt="Kyro Logo" width="125px"></img>
        </div>
        <div>
          <Menu fontSize="large" />
        </div>
      </div>
      <div className="menu-item">
        <ul>
          <li>
            <Home color="disabled" />
            <span>Home</span>
          </li>
          <li>
            <Assignment color="disabled" />
            <span>Assignment</span>
          </li>
          <li>
            <Dashboard color="disabled" />
            <span>Dashboard</span>
          </li>
          <li>
            <Message color="disabled" />
            <span>Messages</span>
          </li>
          <li>
            <ReceiptLong color="disabled" />
            <span> ReceiptLong</span>
          </li>
          <li>
            <CorporateFare color="disabled" />
            <span>CorporateFare</span>
          </li>
          <li>
            <SettingsRounded color="disabled" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="logout_btn">
        <Logout color="disabled" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default MenuBar;
