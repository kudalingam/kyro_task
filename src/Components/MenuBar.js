import "../Assets/CSS/style.css";
import logo from "../Assets/Images/kyro.png";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Documents from "@mui/icons-material/ReceiptLong";
import MessageIcon from "@mui/icons-material/Message";
import Projects from "@mui/icons-material/Assignment";
import Organizations from "@mui/icons-material/CorporateFare";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
const MenuBar = () => {
  return (
    <div className="container vh-100">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} alt="Kyro Logo" width="125px"></img>
        </div>
        <div>
          <MenuIcon fontSize="large" />
        </div>
      </div>
      <div className="menu-item">
        <ul>
          <li>
            <HomeIcon color="disabled" />
            <span>Home</span>
          </li>
          <li>
            <Projects color="disabled" />
            <span>Projects</span>
          </li>
          <li>
            <DashboardIcon color="disabled" />
            <span>Dashboard</span>
          </li>
          <li>
            <MessageIcon color="disabled" />
            <span>Messages</span>
          </li>
          <li>
            <Documents color="disabled" />
            <span> Documents</span>
          </li>
          <li>
            <Organizations color="disabled" />
            <span>Organizations</span>
          </li>
          <li>
            <SettingsRoundedIcon color="disabled" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="logout_btn">
        <LogoutIcon color="disabled" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default MenuBar;
